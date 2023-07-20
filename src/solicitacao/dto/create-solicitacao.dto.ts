import { IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateSolicitacaoDto {
    
    user: User;
    
    @IsString()
    tilted: string;

    @IsString()
    content: string;

}
