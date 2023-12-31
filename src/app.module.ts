import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true, //
  }), UserModule, SolicitacaoModule, AuthModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
