import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  constructor() {}

  @SubscribeMessage('createAsdasd')
  create(@MessageBody() createAsdasdDto: any) {
    return `create ${createAsdasdDto}`;
  }

  @SubscribeMessage('findAllAsdasd')
  findAll() {
    return `findAll `;
  }
}
