import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true, //
  }), UserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
