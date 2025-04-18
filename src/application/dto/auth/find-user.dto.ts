import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class FindUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
