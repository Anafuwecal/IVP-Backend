import { 
  WebSocketGateway, 
  WebSocketServer, 
  OnGatewayConnection, 
  OnGatewayDisconnect 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: '*' }, // In production, restrict this to your frontend domain
  namespace: '/chat'
})
export class MessagingGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  
  private readonly logger = new Logger(MessagingGateway.name);

  constructor(private readonly jwtService: JwtService) {}

  async handleConnection(client: Socket) {
    try {
      // Extract token from handshake auth payload or headers
      const token = 
        client.handshake.auth?.token || 
        client.handshake.headers['authorization']?.split(' ')[1];

      if (!token) {
        throw new Error('Authentication token missing');
      }

      // Verify token
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET // Ensure this matches your AuthModule setup
      });

      const userId = payload.sub || payload.id || payload.userId;

      // Join a unique room for this user. 
      // If they connect from multiple devices, all their sockets join this room.
      const userRoom = `user_${userId}`;
      client.join(userRoom);
      
      this.logger.log(`Client connected: ${client.id} - Joined room: ${userRoom}`);
    } catch (error) {
      this.logger.warn(`Connection rejected: ${error.message}`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  /**
   * Called by the MessagingService to push a new message to the receiver
   */
  emitNewMessage(receiverUserId: string, messageData: any) {
    this.server.to(`user_${receiverUserId}`).emit('newMessage', messageData);
  }
}