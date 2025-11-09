import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import {
  ChatMessage,
  ServerResponse,
} from 'src/application/dto/chat/message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  namespace: 'chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');

  afterInit() {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('history-message')
  historyMessage(@MessageBody() message: ChatMessage): Promise<ServerResponse> {
    this.logger.log(`History message received: ${JSON.stringify(message)}`);
    return Promise.resolve({
      text: `Received history message: ${message.text}`,
      timestamp: new Date(),
      status: 'success',
    });
  }

  @SubscribeMessage('message')
  async chatMessage(
    @MessageBody() message: ChatMessage,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    try {
      this.logger.log(
        `Message received from ${client.id}: ${JSON.stringify(message)}`,
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response: ServerResponse = {
        text: 'This is a response from the server.',
        timestamp: new Date(),
        status: 'success',
      };

      client.emit('message', response);
    } catch (error) {
      this.logger.error('Error processing message:', error);
      client.emit('message', {
        text: 'Error processing your message',
        timestamp: new Date(),
        status: 'error',
      });
    }
  }
}
