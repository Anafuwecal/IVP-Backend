import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class VerifyEmployerDto {
  @IsNotEmpty({ message: 'Status cannot be empty.' })
  @IsEnum(['APPROVED', 'REJECTED'], {
    message: 'Status must be APPROVED or REJECTED.',
  })
  status: 'APPROVED' | 'REJECTED';

  // Rule 5: Require a reason ONLY if the status is REJECTED
  @ValidateIf((obj) => obj.status === 'REJECTED')
  @IsNotEmpty({ message: 'A reason is required when rejecting a verification request.' })
  @IsString()
  rejectionReason?: string;
}