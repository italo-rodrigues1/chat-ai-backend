import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { FileModule } from './file.module';
import { ChatModule } from './chat.module';
import { configValidate } from './common/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: configValidate,
      isGlobal: true,
      envFilePath: `.env`,
    }),
    AuthModule,
    FileModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
