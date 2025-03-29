import { UseGuards } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtAuthGuard } from 'src/infrastructure/auth/guards/jwt-auth.guard';

@WebSocketGateway({ origin: '*', cors: true, namespace: 'flow' })
@UseGuards(JwtAuthGuard)
export class FlowGateway {
  @WebSocketServer()
  server: Server;

  constructor() {}

  handleConnection(client: Socket) {
    console.log(`Flow client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Flow client disconnected: ${client.id}`);
  }
}
