import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  constructor() {} // private readonly aiOrchestrator: AIOrchestrator, // private readonly tokenService: TokenService, // private readonly chatRepository: ChatRepository,

  //   async handleMessage(userId: string, dto: SendMessageDto) {
  //     // 1. Validação de tokens
  //     await this.tokenService.checkQuota(userId);

  //     // 2. Recupera contexto do domínio
  //     const context = await this.chatRepository.getSessionContext(dto.sessionId);

  //     // 3. Usa domain service para processamento
  //     const response = await this.aiOrchestrator.processMessage(
  //       dto.content,
  //       context,
  //     );

  //     // 4. Persiste no repositório
  //     await this.chatRepository.saveMessage(userId, response);

  //     // 5. Atualiza tokens
  //     await this.tokenService.trackUsage(userId, response.tokenCount);

  //     return response.toDTO();
  //   }
}
