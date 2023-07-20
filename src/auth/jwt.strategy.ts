import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    //Decocode token
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Método para receber e extrair o token
      ignoreExpiration: true, //Ignora o tempo de expiração do token (IGNORANDO)
      secretOrKey: 'chave', //Chave para comparação de autenticiadade do token extraido
    });
  }

  //Verifica o conteúdo dentro do token (payload)
  async validate(payload: any) {
    // Aqui, você pode implementar a lógica para verificar se o usuário associado ao token existe no sistema
    // e retornar os dados do usuário, se necessário. Por exemplo, consultar o banco de dados com o ID do usuário (payload.sub).
    // Se o usuário não for encontrado, você pode lançar um UnauthorizedException para negar o acesso.
    return { userType: payload.sub };
  }
}
