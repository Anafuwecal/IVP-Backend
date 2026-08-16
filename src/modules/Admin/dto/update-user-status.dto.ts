import { IsEnum, IsNotEmpty } from 'class-validator';
import { AccountStatus } from '@prisma/client';

export class UpdateUserStatusDto {
  @IsNotEmpty({ message: 'Status cannot be empty.' })
  @IsEnum(AccountStatus, {
    message: 'Status must be a valid value: ACTIVE, INACTIVE, or SUSPENDED.',
  })
  status: AccountStatus;
}