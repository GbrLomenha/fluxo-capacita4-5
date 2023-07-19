import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { query } from 'express';

@Injectable()
export class UserService {
  findOneBy(email: string) {
    throw new Error('Method not implemented.');
  }
  constructor( @InjectRepository(User) private userRepository: Repository<User>) {}

  //Cria novo Usuário
  async create(createUserDto: CreateUserDto){
    const hashed_password = await this.hashPassword(createUserDto.password); //Hasheia a senha cadastrada
    createUserDto.password = hashed_password  //reatribui a senha hasheada a dto

    const newUser = this.userRepository.create({...createUserDto,}) //Cria o novo usuário

    return this.userRepository.save(newUser); //Salva
  }

  findOneByEmail(email: string){
    const query = this.userRepository.createQueryBuilder('user').where('user.email = :email', {email});
    return query.getOne()
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async hashPassword(password:string): Promise<string>{
    const salt = await bcrypt.genSalt(); //Gera um salt
    return bcrypt.hash(password,salt);   //Faz um hash com a senha+salt
  }
}
