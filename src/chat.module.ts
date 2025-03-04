import { Module } from '@nestjs/common';
// import { ChatService } from './application/services/chat.service';
// import { TokenService } from './application/services/token.service';
// import { LangChainService } from './infrastructure/ai/langchain.service';
// import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
// import { PrismaChatRepository } from './infrastructure/database/prisma-chat.repository';
// import { PrismaTokenRepository } from './infrastructure/database/prisma-token.repository';
import { ChatGateway } from './presentation/gateways/chat.gateway';

@Module({
  providers: [
    ChatGateway,
    // ChatService,
    // TokenService,
    // LangChainService,
    // { provide: 'ChatRepository', useClass: PrismaChatRepository },
    // { provide: 'TokenRepository', useClass: PrismaTokenRepository },
    // PrismaService,
  ],
})
export class ChatModule {}
