import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor( @InjectRepository(User) private userRepository: Repository<User>) {}

  //Cria novo Usuário
  async create(createUserDto: CreateUserDto){
    const hashed_password = await this.hashPassword(createUserDto.password); //Hasheia a senha cadastrada

    delete createUserDto.password; //Deleta a senha inserida

    createUserDto.password = hashed_password  //reatribui a senha hasheada a dto

    const newUser = this.userRepository.create({...createUserDto,}) //Cria o novo usuário

    return this.userRepository.save(newUser); //Salva
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async hashPassword(password:string): Promise<string>{
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password,salt);
  }
}
