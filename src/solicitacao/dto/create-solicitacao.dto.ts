import { IsString } from "class-validator";

export class CreateSolicitacaoDto {
    @IsString()
    content: string;

}
