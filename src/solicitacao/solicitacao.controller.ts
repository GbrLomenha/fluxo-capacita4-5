import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Controller('solicitacao')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post()
  create(@Body() createSolicitacaoDto: CreateSolicitacaoDto) {
    return this.solicitacaoService.createSolcitacao(createSolicitacaoDto);
  }

  @Get()
  findAll() {
    return this.solicitacaoService.findAllSolicitacoes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaoService.findSolicitacaoById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('status') UpdateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.solicitacaoService.updateSolicitacaoStatus(+id, UpdateSolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaoService.remove(+id);
  }
}
