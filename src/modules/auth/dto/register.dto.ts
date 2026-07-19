import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'password must be longer than or equal to 8 characters' })
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}