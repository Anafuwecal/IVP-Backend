import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SendMessageDto {
  @IsUUID()
  @IsNotEmpty()
  applicationId: string;

  @IsString()
  @IsNotEmpty({ message: 'Message content cannot be empty.' })
  content: string;
}