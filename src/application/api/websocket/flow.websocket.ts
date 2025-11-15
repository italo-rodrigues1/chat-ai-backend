import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'flow',
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class FlowWebSocket {
  constructor() {}

  @SubscribeMessage('start-flow')
  handleStartFlow() {}

  @SubscribeMessage('message')
  handleMessage() {}
}
