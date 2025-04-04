import { UseGuards } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { JwtAuthGuard } from 'src/infrastructure/auth/guards/jwt-auth.guard';

@WebSocketGateway({ origin: '*', cors: true, namespace: 'chat' })
@UseGuards(JwtAuthGuard)
export class ChatGateway {
  constructor() {}

  @SubscribeMessage('message')
  chatMessage(@MessageBody() message: any) {
    return `message ${message}`;
  }
}
