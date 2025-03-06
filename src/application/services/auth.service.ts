import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync, compare } from 'bcryptjs';
import { User } from 'src/domain/entities/user.entity';
import { JwtPayload } from 'src/domain/interface/jwt-payload.interface';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<{ token: string }> {
    const user = await User.createNew(name, email, password);
    console.log('Hash gerado no register:', user.password); // Log do hash criado
    if (await this.userRepository.exists(user.email)) {
      throw new Error('Email already in use');
    }
    await this.userRepository.create(user);
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async login(email: string, password: string) {
    const getEmail = await this.userRepository.findByEmail(email);
    if (!getEmail) {
      throw new Error('Email already in use');
    }
    const isMatch = await this.comparePasswords(password, getEmail.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }
    const payload: JwtPayload = {
      sub: getEmail.id,
      email: getEmail.email,
      name: getEmail.name,
    };
    return { token: this.jwtService.sign(payload) };
  }

  private comparePasswords(
    plainText: string,
    hashedPassword: string,
  ): Promise<boolean> {
    console.log('plainText: ', plainText);
    console.log('hashedPassword: ', hashedPassword);

    return compare(plainText, hashedPassword);
  }
}
