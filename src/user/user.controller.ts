import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Cria um novo usuario
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  //Remove um usuario
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
