import { Module } from '@nestjs/common';
import { ChatWebSocket } from '../api/websocket/chat.websocket';

@Module({
  imports: [ChatWebSocket],
  controllers: [],
  providers: [],
})
export class ChatModule {}
