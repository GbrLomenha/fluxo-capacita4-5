import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService{
  constructor( //Importações
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ){}
    
    //Função de Login
    async login(loginDto: LoginDto) {
      //Busca o Usuário pelo email na dto
      const user = await this.userService.findOneByEmail(loginDto.email);

      //Verificação se o usuada existe e se a senha está correta
      //bcript faz a comparação da senha na dto com a senha hasheada no db
      if (!user || !(await bcrypt.compare(loginDto.password, user.password))){
        throw new UnauthorizedException('Invalid login'); 
      }

      //Gera o token ao logar, usada para executar métodos
      const payload = { sub: user.id, role: user.role }; //Põe o ID e Role no token
      //Gera o token com a chave do sistema em auth.module
      const token = this.jwtService.sign(payload);

      //Devolve o token gerado
      return token
    }   

}