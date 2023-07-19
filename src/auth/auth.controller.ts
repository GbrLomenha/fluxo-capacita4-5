import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto.ts'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  
  @Post('login')
  async login(@Body() LoginDto:LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }

}
