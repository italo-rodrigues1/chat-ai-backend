import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/application/dto/auth/create-user.dto';
import { FindUserDto } from 'src/application/dto/auth/find-user.dto';
import { AuthService } from 'src/application/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.authService.register(
        createUserDto.name,
        createUserDto.email,
        createUserDto.password,
      );
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('/find/user')
  async findOne(@Body() findUserDto: FindUserDto) {
    try {
      return await this.authService.login(
        findUserDto.email,
        findUserDto.password,
      );
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  findAll() {
    return 'All users retrieved successfully';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeaDto: any) {
    return `User with id ${id},${updateTeaDto} updated successfully`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `User with id ${id} deleted successfully`;
  }
}
