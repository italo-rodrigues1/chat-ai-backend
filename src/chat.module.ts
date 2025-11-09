import { Module } from '@nestjs/common';
import { ChatGateway } from './presentation/gateways/chat.gateway';

@Module({
  providers: [ChatGateway],
})
export class ChatModule {}
