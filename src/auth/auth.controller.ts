import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { registerDto } from './dto/register.dto.js';
import { user } from './entities/users-entity.js';

// - /auth/register : POST
// - /auth/login: POST
// - /auth/forgot-password : POST
// - /auth/password-recovery : PATCH

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post ('register')
    register(@Body() registerDto:registerDto){
        return this.authService.register(registerDto);
    }

    @Post ('login')
    login(@Body() loginDto: any){    
        return this.authService.login(loginDto);
    }

    @Post('forgot-password')
    forgotPassword(@Body() forgotPasswordDto: any){
        return this.authService.forgotPassword(forgotPasswordDto);
    }

    @Patch('password-recovery')
    passwordRecovery(){
        return "Password berhasil diperbarui";
    }
}
