import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';

// Rule 1: FAQ DTOs
export class CreateFaqDto {
  @IsNotEmpty({ message: 'Question cannot be empty.' })
  @IsString()
  question: string;

  @IsNotEmpty({ message: 'Answer cannot be empty.' })
  @IsString()
  answer: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}

export class UpdateFaqDto {
  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsString()
  answer?: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}

// Rule 2: About Us DTO
export class UpdateAboutUsDto {
  @IsNotEmpty({ message: 'Content cannot be empty.' })
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  mission?: string;

  @IsOptional()
  @IsString()
  vision?: string;
}

// Rule 3: Contact Us DTO
export class UpdateContactInfoDto {
  @IsNotEmpty({ message: 'Email cannot be empty.' })
  @IsEmail({}, { message: 'Must be a valid email address.' })
  email: string;

  @IsNotEmpty({ message: 'Phone cannot be empty.' })
  @IsString()
  phone: string;

  @IsNotEmpty({ message: 'Address cannot be empty.' })
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  supportHours?: string;
}

// Rule 4: Announcement DTOs
export class CreateAnnouncementDto {
  @IsNotEmpty({ message: 'Title cannot be empty.' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Message content cannot be empty.' })
  @IsString()
  message: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}

export class UpdateAnnouncementStatusDto {
  @IsNotEmpty({ message: 'isPublished status is required.' })
  @IsBoolean()
  isPublished: boolean;
}