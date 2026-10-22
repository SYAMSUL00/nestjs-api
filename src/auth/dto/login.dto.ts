import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: "Email Harus Diisi" })
    @IsEmail({}, { message: "Format Email Tidak Valid" })
    readonly email: string;

    @IsNotEmpty({ message: "Password Harus Diisi" })
    @IsString({ message: "Password harus berupa teks" })
    readonly password: string;
}