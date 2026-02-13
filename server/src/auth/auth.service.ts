import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(
    registerDto: RegisterDto,
  ): Promise<{ login: string; recoveryCode: string }> {
    const { login, password } = registerDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByLogin(login);
    if (existingUser) {
      throw new ConflictException('User with this login already exists');
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Generate recovery code
    const recoveryCode = this.generateRecoveryCode();

    // Create user
    await this.usersService.create(login, passwordHash, recoveryCode);

    return { login, recoveryCode };
  }

  async login(loginDto: LoginDto): Promise<{ login: string }> {
    const { login, password } = loginDto;

    const user = await this.usersService.findByLogin(login);
    if (!user) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    return { login: user.login };
  }

  private generateRecoveryCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const group = () =>
      Array(4)
        .fill(0)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('');
    return `${group()}-${group()}-${group()}-${group()}`;
  }
}
