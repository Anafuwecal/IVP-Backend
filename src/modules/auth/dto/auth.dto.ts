import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsBoolean,
  Equals,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterTalentDto {
  @ApiProperty({ example: 'John', description: 'The first name of the talent' })
  @IsString()
  @MinLength(2, { message: 'First Name must be at least 2 characters' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the talent' })
  @IsString()
  @MinLength(2, { message: 'Last Name must be at least 2 characters' })
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'A valid email address' })
  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;

  @ApiProperty({ 
    example: 'StrongP@ssw0rd1!', 
    description: 'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character' 
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  password: string;

  @ApiProperty({ example: 'StrongP@ssw0rd1!', description: 'Must exactly match the password field' })
  @IsString()
  confirmPassword: string;

  @ApiProperty({ example: true, description: 'Must be true to accept terms and conditions' })
  @IsBoolean()
  @Equals(true, {
    message: 'Terms & Conditions must be accepted before registration',
  })
  acceptTerms: boolean;
}

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'User login email' })
  @IsEmail({}, { message: 'Invalid email address or password.' })
  email: string;

  @ApiProperty({ example: 'StrongP@ssw0rd1!', description: 'User login password' })
  @IsString()
  @IsNotEmpty({ message: 'Invalid email address or password.' })
  password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ example: 'user@example.com', description: 'The email address associated with the account' })
  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: 'abc123xyz...', description: 'The token received in the password reset email' })
  @IsString()
  @IsNotEmpty({ message: 'Token is required' })
  token: string;

  @ApiProperty({ 
    example: 'NewStr0ngP@ss1!', 
    description: 'New secure password' 
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  newPassword: string;
}

export class RegisterEmployerDto {
  @ApiProperty({ example: 'Tech Corp Innovations', description: 'The registered name of the company' })
  @IsString()
  @IsNotEmpty({ message: 'Company name is required' })
  companyName: string;

  @ApiProperty({ example: 'Jane Smith', description: 'Full name of the primary contact person' })
  @IsString()
  @IsNotEmpty({ message: 'Contact person name is required' })
  contactPerson: string;

  @ApiProperty({ example: 'hr@techcorp.com', description: 'Official company email address' })
  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;

  @ApiProperty({ example: 'StrongP@ssw0rd1!', description: 'Secure password' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  password: string;

  @ApiProperty({ example: 'StrongP@ssw0rd1!', description: 'Must match the password field' })
  @IsString()
  confirmPassword: string;

  @ApiProperty({ example: 'Information Technology', description: 'The primary industry the company operates in' })
  @IsString()
  @IsNotEmpty({ message: 'Industry is required' })
  industry: string;

  @ApiProperty({ example: '50-200', description: 'Estimated number of employees' })
  @IsString()
  @IsNotEmpty({ message: 'Company size is required' })
  companySize: string;

  @ApiProperty({ example: 'RC123456', description: 'Corporate registration number (RC Number)' })
  @IsString()
  @IsNotEmpty({ message: 'RC Number is required' })
  rcNumber: string;

  @ApiProperty({ example: true, description: 'Must be true to accept terms and conditions' })
  @IsBoolean()
  @Equals(true, {
    message: 'Terms & Conditions must be accepted before registration',
  })
  acceptTerms: boolean;
}