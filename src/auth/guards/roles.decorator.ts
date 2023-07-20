import { SetMetadata } from '@nestjs/common';
//Esse arquivo contém o decorador Role que será usado para adicionar metadados relacionados aos cargos.
export const Role = (role: string) => SetMetadata('role', role);
