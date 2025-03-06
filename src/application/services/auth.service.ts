import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
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

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);

    if (user && (await this.comparePasswords(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(user: User): Promise<{ token: string }> {
    if (await this.userRepository.exists(user.email)) {
      throw new Error('Email already in use');
    }

    await this.userRepository.create(user);

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    console.log(payload);
    return {
      token: this.jwtService.sign(payload),
    };
  }

  login(user: any) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private comparePasswords(
    plainText: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(plainText, hashedPassword);
  }
}
