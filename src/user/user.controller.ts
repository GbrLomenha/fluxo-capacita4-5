import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/guards/roles.guards'
import { LoginDto } from '../auth/dto/login.dto';
import { Role } from 'src/auth/guards/roles.decorator';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    ) {}

  //Cria um novo usuario
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //Cria um novo usuario
  @Post('admin')
  @UseGuards()
  @Role('admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.createAdmin(createAdminDto);
  }

  @Get('login')
  login(@Body() LoginDto:LoginDto ){
    return this.authService.login(LoginDto)
  }

  //Exibe um usuario pelo email
  @Get('email') 
  findOneBy(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  //Exibe todos os usuarios
  @Get() 
  findAll() {
    return this.userService.findAll();
  }

  //Atualiza um usuario
  @Patch(':id')
  @UseGuards()
  @Role('admin')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  //Remove um usuario
  @Delete(':id')
  @UseGuards()
  @Role('admin')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
