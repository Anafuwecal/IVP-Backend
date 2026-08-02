import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsBoolean,
  Equals,
  IsArray,
  IsOptional,
} from 'class-validator';

export class RegisterTalentDto {
  @IsString()
  @MinLength(2, { message: 'First Name must be at least 2 characters' })
  @MaxLength(30, { message: 'First Name must not exceed 30 characters' })
  firstName: string; //

  @IsString()
  @MinLength(2, { message: 'Last Name must be at least 2 characters' })
  @MaxLength(30, { message: 'Last Name must not exceed 30 characters' })
  lastName: string; //[cite: 1, 6]

  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string; //[cite: 1, 6]

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  password: string; //[cite: 1, 6]

  @IsBoolean()
  @Equals(true, {
    message: 'Terms & Conditions must be accepted before registration',
  })
  acceptTerms: boolean; //[cite: 1, 6]
}

export class UpdateTalentProfileDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsArray()
  skills?: string[]; //

  @IsOptional()
  @IsArray()
  workExperience?: any[]; //[cite: 1, 6]

  @IsOptional()
  @IsArray()
  educationalQualifications?: any[]; //[cite: 1, 6]
}
