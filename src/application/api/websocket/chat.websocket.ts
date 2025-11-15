import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class ChatWebSocket {
  constructor() {}

  @SubscribeMessage('start-chat')
  handleStartChat() {}

  @SubscribeMessage('message')
  handleMessage() {}
}
