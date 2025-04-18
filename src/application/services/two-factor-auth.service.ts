import { Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';
import { User } from '@prisma/client';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';

@Injectable()
export class TwoFactorAuthService {
  constructor(private prisma: PrismaService) {}

  // async generateSecret(user: User) {
  //   const secret = authenticator.generateSecret();
  //   const otpauth = authenticator.keyuri(user.email, 'Chat AI Backend', secret);

  //   await this.prisma.user.update({
  //     where: { id: user.id },
  //     data: { twoFactorSecret: secret },
  //   });

  //   const qrCode = await toDataURL(otpauth);
  //   return { secret, qrCode };
  // }

  // async verifyCode(user: User, code: string) {
  //   const userData = await this.prisma.user.findUnique({
  //     where: { id: user.id },
  //   });

  //   if (userData && !userData.twoFactorSecret) {
  //     throw new Error('2FA is not enabled for this user');
  //   }

  //   return authenticator.verify({
  //     token: code,
  //     secret: userData.twoFactorSecret,
  //   });
  // }

  // async enable2FA(user: User, code: string) {
  //   const isValid = await this.verifyCode(user, code);
  //   if (!isValid) {
  //     throw new Error('Invalid 2FA code');
  //   }

  //   await this.prisma.user.update({
  //     where: { id: user.id },
  //     data: { isTwoFactorEnabled: true },
  //   });

  //   return { message: '2FA enabled successfully' };
  // }
}
