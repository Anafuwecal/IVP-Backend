import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(20, { message: 'description must contain at least 20 characters' })
  description: string;
}
