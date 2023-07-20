import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  //Função que gera o token ao logar, usada para executar métodos
  async generateToken(userId: number) {
    const payload = { sub: userId }; //Põe o ID no token
    //Gera o token com a chave em auth.module
    return this.jwtService.sign(payload);
  }
}
