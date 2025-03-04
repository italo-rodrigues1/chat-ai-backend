import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { FileModule } from './file.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, FileModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
