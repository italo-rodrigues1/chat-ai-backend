import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidate } from '../../common/config/configuration';
import { AuthModule } from './Auth.module';
import { ChatModule } from './Chat.module';
import { FlowModule } from './Flow.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: configValidate,
      isGlobal: true,
      envFilePath: `.env`,
    }),
    AuthModule,
    ChatModule,
    FlowModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
