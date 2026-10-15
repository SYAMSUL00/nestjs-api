import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'MatchPassword' })
class MatchPasswordConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [relatedProperty] = args.constraints;
    return value === (args.object as any)[relatedProperty];
  }

  defaultMessage() {
    return 'Konfirmasi password harus sama dengan password';
  }
}

export class RegisterDto {
  readonly id: number;

  @IsString()
  @IsNotEmpty({ message: 'Username harus diisi' })
  @MaxLength(30, { message: 'Username maksimal 30 karakter' })
  readonly nama: string;

  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Format email tidak sesuai' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password harus diisi' })
  @MinLength(3, { message: 'Password minimal 3 karakter' })
  @MaxLength(16, { message: 'Password maksimal 16 karakter' })
  readonly password: string;

  @IsNotEmpty({ message: 'Konfirmasi password harus diisi' })
  @Validate(MatchPasswordConstraint, ['password'])
  readonly ConfirmPassword: string;
}