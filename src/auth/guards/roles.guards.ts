import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {} //Usado para acessar os metadados do decorador Role

  //Função de validação de acesso por cargo
  canActivate(context: ExecutionContext): boolean { 
    //Pega o parâmetro passado no decorador que está no controller
    const requiredRole = this.reflector.get<string>('role', context.getHandler()); 

    //Se a role n estiver definida dá acesso a qualquer usuario
    if (!requiredRole) {
      return true;
    }

    //Estando definida, pega informação do usuário no token passado no método HTTP
    const { user } = context.switchToHttp().getRequest();

    //Retorna o bool de acesso
    return user && user.role === requiredRole;
  }
}
