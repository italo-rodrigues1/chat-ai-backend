import { v4 as uuidv4 } from 'uuid';
import { genSalt, compare, hash } from 'bcryptjs';

export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  private constructor(
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
    this.password = password;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  public static async createNew(
    name: string,
    email: string,
    plainPassword: string,
  ): Promise<User> {
    const hashedPassword = await this.hashPassword(plainPassword);
    return new User(name, email, hashedPassword);
  }

  public static createFromPersistence(data: {
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
      data.password, // Senha já hasheada
      data.id,
      data.createdAt,
      data.updatedAt,
    );
  }

  public async comparePassword(plainPassword: string): Promise<boolean> {
    console.log('plainPassword', plainPassword);
    console.log('this.password', this.password);

    return compare(plainPassword, this.password);
  }

  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Formato de email inválido');
    }
  }

  private validatePassword(password: string): void {
    if (password.length < 8) {
      throw new Error('A senha deve ter pelo menos 8 caracteres');
    }
  }

  private static async hashPassword(plainPassword: string): Promise<string> {
    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(plainPassword, salt);
      return hashedPassword;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao hashear a senha');
    }
  }

  public async updatePassword(newPlainPassword: string): Promise<User> {
    const hashedPassword = await User.hashPassword(newPlainPassword);
    return new User(
      this.name,
      this.email,
      hashedPassword,
      this.id,
      this.createdAt,
      new Date(),
    );
  }

  public updateEmail(newEmail: string): User {
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
