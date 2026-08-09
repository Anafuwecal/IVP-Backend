import { 
  Controller, 
  Post, 
  Get, 
  Delete, 
  Body, 
  Param, 
  Query, 
  Req, 
  UseGuards 
} from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { SendMessageDto } from './dto/send-message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Post('send')
  async sendMessage(@Req() req, @Body() dto: SendMessageDto) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.sendMessage(userId, req.user?.role, dto);
  }

  @Get('conversations')
  async getConversations(@Req() req, @Query('search') search?: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.getConversations(userId, req.user?.role, search);
  }

  @Get('conversations/:id/messages')
  async getMessages(@Req() req, @Param('id') conversationId: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.getConversationMessages(conversationId, userId, req.user?.role);
  }

  @Delete('conversations/:id')
  async deleteConversation(@Req() req, @Param('id') conversationId: string) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.messagingService.deleteConversation(conversationId, userId);
  }
}