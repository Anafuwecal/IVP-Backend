import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsBoolean,
  Equals,
} from 'class-validator';
//MaxLength

export class RegisterTalentDto {
  @IsString()
  @MinLength(2, { message: 'First Name must be at least 2 characters' })
  firstName: string;

  @IsString()
  @MinLength(2, { message: 'Last Name must be at least 2 characters' })
  lastName: string;

  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  password: string;

  // Requirement: Confirm Password UI match.
  // We validate the strict policy on 'password', UI handles the match, but we can accept it here to satisfy the payload.
  @IsString()
  confirmPassword: string;

  @IsBoolean()
  @Equals(true, {
    message: 'Terms & Conditions must be accepted before registration',
  })
  acceptTerms: boolean;
}

export class LoginDto {
  @IsEmail({}, { message: 'Invalid email address or password.' }) // Requirement: Custom error message
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Invalid email address or password.' })
  password: string;
}

export class ForgotPasswordDto {
  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;
}

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty({ message: 'Token is required' })
  token: string;

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
  @IsString()
  @IsNotEmpty({ message: 'Company name is required' })
  companyName: string;

  @IsString()
  @IsNotEmpty({ message: 'Contact person name is required' })
  contactPerson: string;

  @IsEmail({}, { message: 'Must be a valid email format' })
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be minimum 8 characters, and contain uppercase, lowercase, number, and special character',
    },
  )
  password: string;

  @IsString()
  confirmPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'Industry is required' })
  industry: string;

  @IsString()
  @IsNotEmpty({ message: 'Company size is required' })
  companySize: string;

  @IsString()
  @IsNotEmpty({ message: 'RC Number is required' })
  rcNumber: string;

  @IsBoolean()
  @Equals(true, {
    message: 'Terms & Conditions must be accepted before registration',
  })
  acceptTerms: boolean;
}
