import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client/edge';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? this.toDomain(user) : null;
  }

  private toDomain(prismaUser: any): User {
    console.log('prismaUser', prismaUser);
    return User.createFromPersistence({
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      password: prismaUser.password,
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt,
    });
  }

  private toPrisma(user: Partial<User>): Prisma.UserCreateInput {
    return {
      id: user.id,
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async create(
    user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    const prismaUser = this.toPrisma(user);
    const createdUser = await this.prisma.user.create({ data: prismaUser });
    return this.toDomain(createdUser);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? this.toDomain(user) : null;
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: this.toPrisma(data),
    });
    return this.toDomain(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async exists(email: string): Promise<boolean> {
    const count = await this.prisma.user.count({ where: { email } });
    return count > 0;
  }
}
