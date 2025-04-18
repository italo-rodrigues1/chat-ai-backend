import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // UseGuards,
  // Req,
  // Res,
} from '@nestjs/common';
import { CreateUserDto } from 'src/application/dto/auth/create-user.dto';
import { FindUserDto } from 'src/application/dto/auth/find-user.dto';
import { AuthService } from 'src/application/services/auth.service';
// import { AuthGuard } from '@nestjs/passport';
// import { Response } from 'express';
// import { TwoFactorAuthService } from '../../application/services/two-factor-auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    // private readonly twoFactorAuthService: TwoFactorAuthService,
  ) {}

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

  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth() {
  //   // This route will redirect to Google OAuth
  // }

  // @Get('google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleAuthCallback(@Req() req, @Res() res: Response) {
  //   const user = await this.authService.handleOAuthLogin(req.user);
  //   const token = await this.authService.generateToken(user);
  //   res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  // }

  // @Get('apple')
  // @UseGuards(AuthGuard('apple'))
  // async appleAuth() {
  //   // This route will redirect to Apple OAuth
  // }

  // @Get('apple/callback')
  // @UseGuards(AuthGuard('apple'))
  // async appleAuthCallback(@Req() req, @Res() res: Response) {
  //   const user = await this.authService.handleOAuthLogin(req.user);
  //   const token = await this.authService.generateToken(user);
  //   res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  // }

  // @Post('2fa/generate')
  // @UseGuards(AuthGuard('jwt'))
  // async generate2FASecret(@Req() req) {
  //   return this.twoFactorAuthService.generateSecret(req.user);
  // }

  // @Post('2fa/verify')
  // @UseGuards(AuthGuard('jwt'))
  // async verify2FACode(@Req() req, @Body('code') code: string) {
  //   return this.twoFactorAuthService.verifyCode(req.user, code);
  // }

  // @Post('2fa/enable')
  // @UseGuards(AuthGuard('jwt'))
  // async enable2FA(@Req() req, @Body('code') code: string) {
  //   return this.twoFactorAuthService.enable2FA(req.user, code);
  // }
}
