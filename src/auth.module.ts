import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './presentation/controllers/auth.controller';
import { AuthService } from './application/services/auth.service';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { PrismaUserRepository } from './infrastructure/database/prisma-user.repository';
import { JwtStrategy } from './infrastructure/strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    { provide: 'UserRepository', useClass: PrismaUserRepository },
    PrismaService,
  ],
})
export class AuthModule {}
