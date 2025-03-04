import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('file')
export class FileController {
  constructor() {}

  @Post()
  create(@Body() createTeaDto: any) {
    return `User created successfully ${createTeaDto}`;
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
