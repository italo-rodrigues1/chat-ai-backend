import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './application/services/auth.service';
import { JwtStrategy } from './infrastructure/auth/strategies/jwt.strategy';
// import { GoogleStrategy } from './infrastructure/auth/strategies/google.strategy';
// import { AppleStrategy } from './infrastructure/auth/strategies/apple.strategy';
import { PrismaService } from './infrastructure/database/prisma/prisma.service';
import { PrismaUserRepository } from './infrastructure/database/repositories/prisma-user.repository';
import { AuthController } from './presentation/controllers/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: (process.env.JWT_EXPIRES_IN as any) || '1d',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    // GoogleStrategy,
    // AppleStrategy,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
    PrismaService,
  ],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
