import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'chave', // Substitua pela sua chave secreta para verificar a autenticidade dos tokens
    });
  }

  async validate(payload: any) {
    // Aqui, você pode implementar a lógica para verificar se o usuário associado ao token existe no sistema
    // e retornar os dados do usuário, se necessário. Por exemplo, consultar o banco de dados com o ID do usuário (payload.sub).
    // Se o usuário não for encontrado, você pode lançar um UnauthorizedException para negar o acesso.
    return { userId: payload.sub };
  }
}
