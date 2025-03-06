import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from 'src/application/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  async create(@Body() user: any) {
    try {
      await this.authService.register(user);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  findAll() {
    return 'All users retrieved successfully';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User with id ${id} retrieved successfully`;
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
