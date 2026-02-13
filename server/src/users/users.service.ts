import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByLogin(login: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { login } });
  }

  async create(
    login: string,
    passwordHash: string,
    recoveryCode: string,
  ): Promise<User> {
    const user = this.usersRepository.create({
      login,
      passwordHash,
      recoveryCode,
    });
    return this.usersRepository.save(user);
  }
}
