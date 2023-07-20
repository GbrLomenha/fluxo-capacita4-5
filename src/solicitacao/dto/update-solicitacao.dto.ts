import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacaoDto } from './create-solicitacao.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSolicitacaoDto extends PartialType(CreateSolicitacaoDto) {
    @IsString()
    @IsNotEmpty()
    status: string //Atualiza apenas o Status da Solicitacao
}
