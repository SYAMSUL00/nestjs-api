import { loginDto } from './dto/login.dto.js';
import { registerDto } from './dto/register.dto.js';
import { forgotPasswordDto } from './dto/forgot-password.dto.js';
import { Injectable } from '@nestjs/common';
import { user } from './entities/users-entity.js';

@Injectable()
export class AuthService {
    //register
    register(registerDto: registerDto): user{
        const newUser: user = {
            id : 1,
            nama : registerDto.nama,
            email : registerDto.email,
            password : registerDto.password,
            ConfirmPassword : registerDto.ConfirmPassword
        }

    return newUser;
    }

    //login
    login(loginDto: loginDto): loginDto{
        const user: loginDto = {
            email : loginDto.email,
            password : loginDto.password
        }
    return user;
        
    }

    //forgot password
    forgotPassword(forgotPasswordDto: forgotPasswordDto): forgotPasswordDto{
        const user: forgotPasswordDto = {
            email : forgotPasswordDto.email
        }
    return user;

    }

    //password recovery
    passwordRecovery(){

    }
}
