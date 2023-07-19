import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { Solicitacao } from './entities/solicitacao.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SolicitacaoService {
  constructor( @InjectRepository(Solicitacao) private solicitacaoRepository: Repository<Solicitacao>) {}

// Criar Solicitacao
  createSolcitacao(createSolicitacaoDto: CreateSolicitacaoDto) {
    const novaSolicitacao = this.solicitacaoRepository.create(createSolicitacaoDto);
    return this.solicitacaoRepository.save(novaSolicitacao)
  }
// Vizualizar todas as solicitações
  findAllSolicitacoes() {
    return this.solicitacaoRepository.find();
  }
//Ver solicitação específica
  findSolicitacaoById(id: number) {
    return this.solicitacaoRepository.findOneBy({id});
  }
//Atualizar status de uma solicitação
  async updateSolicitacaoStatus(id: number, status: string) {
    const solicitacao = await this.findSolicitacaoById(id);
    if (!solicitacao) {
      throw new Error('Solicitação de suporte não encontrada');
    }
    solicitacao.status = status;
    return this.solicitacaoRepository.save(solicitacao);
  }
//Remover uma solicitação
  async remove(id: number) {
    const solicitacao = await this.findSolicitacaoById(id);
    return this.solicitacaoRepository.delete(solicitacao)
  }
}
