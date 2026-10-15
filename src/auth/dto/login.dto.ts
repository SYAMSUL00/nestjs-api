import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Username harus diisi' })
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password harus diisi' })
  @MinLength(3, { message: 'Password minimal 3 karakter' })
  @MaxLength(16, { message: 'Password maksimal 16 karakter' })
  readonly password: string;
}