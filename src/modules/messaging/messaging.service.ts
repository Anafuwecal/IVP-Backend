import { 
  Injectable, 
  ForbiddenException, 
  NotFoundException, 
  BadRequestException, 
  Logger 
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';
import { MessagingGateway } from './messaging.gateway';

@Injectable()
export class MessagingService {
  private readonly logger = new Logger(MessagingService.name);

  constructor(
    private prisma: PrismaService,
    private messagingGateway: MessagingGateway
  ) {}

  // 1. SEND MESSAGE
  async sendMessage(senderUserId: string, userRole: string, dto: SendMessageDto) {
    const { applicationId, conversationId, content } = dto;

    if (!content || content.trim().length === 0) {
      throw new BadRequestException('Cannot send an empty message.');
    }

    if (!applicationId && !conversationId) {
      throw new BadRequestException('Either applicationId or conversationId must be provided.');
    }

    try {
      let conversation: any = null;
      let application: any = null;

      if (conversationId) {
        conversation = await this.prisma.conversation.findUnique({
          where: { id: conversationId },
          include: {
            application: {
              include: {
                job: { include: { employer: true } },
                talentProfile: true,
              },
            },
          },
        });
        if (!conversation) throw new NotFoundException('Conversation not found.');
        application = conversation.application;
      } else if (applicationId) {
        application = await this.prisma.application.findUnique({
          where: { id: applicationId },
          include: {
            job: { include: { employer: true } },
            talentProfile: true,
          },
        });
        if (!application) throw new NotFoundException('Job application relationship not found.');
      }

      const isEmployerSender = application.job.employer.userId === senderUserId;
      const isTalentSender = application.talentProfile.userId === senderUserId;

      if (!isEmployerSender && !isTalentSender) {
        throw new ForbiddenException('You do not have an active application relationship to message this user.');
      }

      if (!conversation) {
        conversation = await this.prisma.conversation.findUnique({
          where: { applicationId: application.id },
        });

        if (!conversation) {
          conversation = await this.prisma.conversation.create({
            data: {
              applicationId: application.id,
              employerId: application.job.employer.id,
              talentId: application.talentProfile.id,
            },
          });
        }
      }

      // Restore conversation visibility if previously deleted
      await this.prisma.conversation.update({
        where: { id: conversation.id },
        data: {
          deletedByEmployer: false,
          deletedByCandidate: false,
          updatedAt: new Date(),
        },
      });

      const message = await this.prisma.message.create({
        data: {
          conversationId: conversation.id,
          senderId: senderUserId,
          content: content.trim(),
        },
      });

      // Real-time Gateway Broadcast
      const receiverUserId = isEmployerSender
        ? application.talentProfile.userId
        : application.job.employer.userId;

      const senderProfileName = isEmployerSender
        ? application.job.employer.companyName
        : `${application.talentProfile.firstName} ${application.talentProfile.lastName}`;

      this.messagingGateway.emitNewMessage(receiverUserId, {
        messageId: message.id,
        conversationId: conversation.id,
        content: message.content,
        createdAt: message.createdAt,
        sender: {
          id: senderUserId,
          name: senderProfileName,
        },
      });

      return message;
    } catch (error) {
      this.logger.error(`Failed to send message: ${error.message}`);
      if (error instanceof ForbiddenException || error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Unable to send message. Please try again.');
    }
  }

  // 2. GET CONVERSATIONS LIST
  async getConversations(userId: string, userRole: string, searchQuery?: string) {
    const employer = await this.prisma.employerProfile.findUnique({ where: { userId } });
    const talent = await this.prisma.talentProfile.findUnique({ where: { userId } });

    const whereCondition: any = { OR: [] };

    if (employer) {
      whereCondition.OR.push({ employerId: employer.id, deletedByEmployer: false });
    }
    if (talent) {
      whereCondition.OR.push({ talentId: talent.id, deletedByCandidate: false });
    }

    if (whereCondition.OR.length === 0) return [];

    let conversations = await this.prisma.conversation.findMany({
      where: whereCondition,
      include: {
        employer: true,
        talentProfile: true,
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      conversations = conversations.filter((c) => {
        const empName = c.employer.companyName.toLowerCase();
        const candName = `${c.talentProfile.firstName} ${c.talentProfile.lastName}`.toLowerCase();
        return empName.includes(q) || candName.includes(q);
      });
    }

    return Promise.all(
      conversations.map(async (conv) => {
        const unreadCount = await this.prisma.message.count({
          where: {
            conversationId: conv.id,
            isRead: false,
            senderId: { not: userId },
          },
        });

        // Determine participant details based on who is requesting
        const participantName = employer 
          ? `${conv.talentProfile.firstName} ${conv.talentProfile.lastName}`
          : conv.employer.companyName;

        const participantAvatar = employer 
          ? null // Fallback since talent has no avatar in snippet
          : conv.employer.logoUrl;

        return {
          id: conv.id,
          applicationId: conv.applicationId,
          participantName,
          participantAvatar,
          lastMessage: conv.messages[0] || null,
          unreadCount,
          updatedAt: conv.updatedAt,
        };
      })
    );
  }

  // 3. GET MESSAGES IN CONVERSATION
  async getConversationMessages(conversationId: string, userId: string, userRole: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { employer: true, talentProfile: true },
    });

    if (!conversation) throw new NotFoundException('Conversation not found.');

    const isAdmin = userRole === 'ADMIN' || userRole === 'SUPER_ADMIN';
    const isEmployer = conversation.employer.userId === userId;
    const isTalent = conversation.talentProfile.userId === userId;

    if (!isAdmin && !isEmployer && !isTalent) {
      throw new ForbiddenException('You are not authorized to view this conversation.');
    }

    if (!isAdmin) {
      await this.prisma.message.updateMany({
        where: {
          conversationId,
          senderId: { not: userId },
          isRead: false,
        },
        data: { isRead: true },
      });
    }

    return this.prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });
  }

  // 4. SOFT DELETE CONVERSATION
  async deleteConversation(conversationId: string, userId: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { employer: true, talentProfile: true },
    });

    if (!conversation) throw new NotFoundException('Conversation not found.');

    if (conversation.employer.userId === userId) {
      await this.prisma.conversation.update({
        where: { id: conversationId },
        data: { deletedByEmployer: true },
      });
    } else if (conversation.talentProfile.userId === userId) {
      await this.prisma.conversation.update({
        where: { id: conversationId },
        data: { deletedByCandidate: true }, // Using the exact DB flag
      });
    } else {
      throw new ForbiddenException('You are not a participant in this conversation.');
    }

    return { message: 'Conversation deleted successfully from your inbox.' };
  }

  async getAllConversationsForAdmin(searchQuery?: string) {
    let conversations = await this.prisma.conversation.findMany({
      include: {
        employer: true,
        talentProfile: true,
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      conversations = conversations.filter((c) => {
        const empName = c.employer.companyName.toLowerCase();
        const candName = `${c.talentProfile.firstName} ${c.talentProfile.lastName}`.toLowerCase();
        return empName.includes(q) || candName.includes(q);
      });
    }

    return conversations.map((conv) => ({
      id: conv.id,
      applicationId: conv.applicationId,
      employerName: conv.employer.companyName,
      talentName: `${conv.talentProfile.firstName} ${conv.talentProfile.lastName}`,
      lastMessage: conv.messages[0] || null,
      updatedAt: conv.updatedAt,
    }));
  }
}