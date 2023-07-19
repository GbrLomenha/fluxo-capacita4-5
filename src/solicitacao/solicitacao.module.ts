import { Module } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { Solicitacao } from './entities/solicitacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Solicitacao])],
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService]
})
export class SolicitacaoModule {}
