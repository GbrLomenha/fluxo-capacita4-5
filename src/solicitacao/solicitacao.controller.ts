import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { RolesGuard } from 'src/auth/guards/roles.guards'
import { Role } from 'src/auth/guards/roles.decorator';

@Controller('solicitacao')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post() //Cria uma nova solicitacao
  @UseGuards()
  @Role('client')
  create(@Body() createSolicitacaoDto: CreateSolicitacaoDto) {
    return this.solicitacaoService.createSolcitacao(createSolicitacaoDto);
  }

  @Get() //Exibe todas as solicitações
  findAll() {
    return this.solicitacaoService.findAllSolicitacoes();
  }

  @Get(':id') //Exibe uma solicitação expecífica
  findOne(@Param('id') id: string) {
    return this.solicitacaoService.findSolicitacaoById(+id);
  }

  @Patch(':id') //Atualiza uma solicitação com JSON
  @UseGuards()
  @Role('admin')
  update(@Param('id') id: string, @Body('status') UpdateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.solicitacaoService.updateSolicitacaoStatus(+id, UpdateSolicitacaoDto);
  }

  @Delete(':id') //Apaga uma solicitação
  @UseGuards()
  @Role('admin')
  remove(@Param('id') id: string) {
    return this.solicitacaoService.remove(+id);
  }
}
