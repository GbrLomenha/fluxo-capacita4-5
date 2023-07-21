import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateAdminDto {
// Role do usuário
    @IsString()
    @IsNotEmpty()
    type: string; 
//Nome do usuario
    @IsString()
    @IsNotEmpty()
    name: string;
//Email do usuario
    @IsEmail()
    @IsNotEmpty()
    email: string;
//Senha do usuario
    @IsString()
    @IsNotEmpty()
    password: string;
    
}
