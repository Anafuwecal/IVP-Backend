import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class SendMessageDto {
  @IsUUID()
  @IsOptional()
  applicationId?: string;

  @IsUUID()
  @IsOptional()
  conversationId?: string;

  @IsString()
  @IsNotEmpty({ message: 'Message content cannot be empty.' })
  content: string;
}