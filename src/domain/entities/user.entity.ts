import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.validateEmail(email);
    this.validatePassword(password);

    this.id = id || uuidv4();
    this.name = name;
    this.email = email.toLowerCase().trim();
    this.password = this.hashPassword(password);
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  // Factory method para criação a partir do banco de dados
  static createFromPersistence(data: {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }): User {
    return new User(
      data.name,
      data.email,
      data.password,
      data.id,
      data.createdAt,
      data.updatedAt,
    );
  }

  // Métodos de negócio
  comparePassword(plainPassword: string): boolean {
    return bcrypt.compareSync(plainPassword, this.password);
  }

  // Validações
  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  }

  private validatePassword(password: string): void {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
  }

  private hashPassword(plainPassword: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainPassword, salt);
  }

  // Métodos para atualização (imutabilidade)
  updatePassword(newPassword: string): User {
    return new User(
      this.name,
      this.email,
      newPassword,
      this.id,
      this.createdAt,
      new Date(),
    );
  }

  updateEmail(newEmail: string): User {
    return new User(
      this.name,
      newEmail,
      this.password,
      this.id,
      this.createdAt,
      new Date(),
    );
  }
}
