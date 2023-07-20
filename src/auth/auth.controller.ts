import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto'
import { UserService } from 'src/user/user.service'

@Controller('auth')
export class AuthController extends UserController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('login')
  async login(@Body() LoginDto:LoginDto, @Request() req) {
    return this.authService.login(req.user);
  } 
}
