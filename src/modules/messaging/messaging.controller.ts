import { 
  Controller, 
  Post, 
  Get, 
  Delete, 
  Body, 
  Param, 
  Query, 
  Req, 
  UseGuards,
  ForbiddenException 
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiBearerAuth, 
  ApiOkResponse, 
  ApiCreatedResponse, 
  ApiParam, 
  ApiQuery, 
  ApiUnauthorizedResponse, 
  ApiForbiddenResponse 
} from '@nestjs/swagger';
import { MessagingService } from './messaging.service';
import { SendMessageDto } from './dto/send-message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Messaging')
@ApiBearerAuth() // Tells Swagger all endpoints in this controller require a JWT
@UseGuards(JwtAuthGuard)
@Controller('api/v1/messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send a message (start a new conversation or reply to an existing one)' })
  @ApiCreatedResponse({ description: 'Message sent successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async sendMessage(@Req() req, @Body() dto: SendMessageDto) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.sendMessage(userId, req.user?.role, dto);
  }

  @Get('conversations')
  @ApiOperation({ summary: 'Get all active conversations for the authenticated user' })
  @ApiQuery({ name: 'search', required: false, description: 'Optional search term to filter conversations' })
  @ApiOkResponse({ description: 'List of conversations retrieved successfully.' })
  async getConversations(@Req() req, @Query('search') search?: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.getConversations(userId, req.user?.role, search);
  }

  @Get('conversations/:id/messages')
  @ApiOperation({ summary: 'Get all messages within a specific conversation' })
  @ApiParam({ name: 'id', description: 'The UUID of the conversation' })
  @ApiOkResponse({ description: 'List of messages retrieved successfully.' })
  async getMessages(@Req() req, @Param('id') conversationId: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.getConversationMessages(conversationId, userId, req.user?.role);
  }

  @Delete('conversations/:id')
  @ApiOperation({ summary: 'Delete or archive a conversation' })
  @ApiParam({ name: 'id', description: 'The UUID of the conversation to delete' })
  @ApiOkResponse({ description: 'Conversation deleted successfully.' })
  async deleteConversation(@Req() req, @Param('id') conversationId: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.deleteConversation(conversationId, userId);
  }

  @Get('admin/conversations')
  @ApiOperation({ summary: 'Admin view of all platform conversations' })
  @ApiQuery({ name: 'search', required: false, description: 'Optional search term to filter system conversations' })
  @ApiOkResponse({ description: 'List of all system conversations retrieved successfully.' })
  @ApiForbiddenResponse({ description: 'Only administrators can access this endpoint.' })
  async getAllConversationsForAdmin(@Req() req, @Query('search') search?: string) {
    const userRole = req.user?.role;
    if (userRole !== 'ADMIN' && userRole !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Only administrators can access this endpoint.');
    }
    return this.messagingService.getAllConversationsForAdmin(search);
  }
}