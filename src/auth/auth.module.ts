import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'chave', //Chave secreta
      signOptions: {expiresIn: '1d'},   //Tempo de expiração do token
    })
  ],
  controllers: [],
  providers: [AuthService , JwtStrategy]
})
export class AuthModule {}
