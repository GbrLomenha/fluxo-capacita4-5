import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'chave', //Chave secreta
      signOptions: {expiresIn: '1d'},   //Tempo de expiração do token
    })
  ],
  controllers: [],
  providers: [AuthService , JwtStrategy, UserService, Repository],
  exports: [AuthService, UserService, Repository]
})
export class AuthModule {}
