import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { FileModule } from './file.module';
import { ChatModule } from './chat.module';
import { configValidate } from './common/config/configuration';
import { FlowModule } from './flow.module';

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
    FlowModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
