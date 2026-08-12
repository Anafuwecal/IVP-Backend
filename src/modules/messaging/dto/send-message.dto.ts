import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiPropertyOptional({ 
    example: '123e4567-e89b-12d3-a456-426614174000', 
    description: 'The UUID of the related job application (required for a new conversation)' 
  })
  @IsUUID()
  @IsOptional()
  applicationId?: string;

  @ApiPropertyOptional({ 
    example: '987fcdeb-51a2-43d7-9012-345678901234', 
    description: 'The UUID of an existing conversation (required if replying)' 
  })
  @IsUUID()
  @IsOptional()
  conversationId?: string;

  @ApiProperty({ 
    example: 'Hello! I am following up on my recent job application.', 
    description: 'The text content of the message' 
  })
  @IsString()
  @IsNotEmpty({ message: 'Message content cannot be empty.' })
  content: string;
}