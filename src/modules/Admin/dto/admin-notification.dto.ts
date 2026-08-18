import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export enum TargetAudience {
  ALL = 'ALL',
  TALENT = 'TALENT',
  EMPLOYER = 'EMPLOYER',
}

export class CreateBroadcastDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Message content is required' })
  @IsString()
  message: string;

  @IsNotEmpty({ message: 'Target audience is required' })
  @IsEnum(TargetAudience, {
    message: 'Target audience must be ALL, TALENT, or EMPLOYER',
  })
  targetAudience: TargetAudience;
}