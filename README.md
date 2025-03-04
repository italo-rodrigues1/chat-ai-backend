## Requisitos

1. **Arquitetura do Projeto**:

   - Utilizar Clean Architecture com camadas bem definidas (Interface, Application, Domain e Infrastructure).
   - Implementar princípios SOLID e padrões de design para garantir escalabilidade e manutenção fácil.

2. **Autenticação**:

   - Implementar autenticação com Google e Apple utilizando OAuth 2.0.
   - Utilizar JWT (JSON Web Tokens) para gerenciamento de sessões e autenticação de API.
   - Adicionar verificação de dois fatores (2FA) para aumentar a segurança.

3. **Conexão WebSocket**:

   - Implementar WebSocket para gerenciamento de usuários em tempo real e envio/recebimento de mensagens no chat.
   - Implementar lógica para reconexão automática e tratamento de falhas de conexão.

4. **Histórico de Chat**:

   - Armazenar todo o histórico de chat em um banco de dados SQL para fácil recuperação e consulta.
   - Implementar funcionalidades de pesquisa e filtragem no histórico de chat.

5. **Upload de Arquivo**:

   - Permitir que os usuários façam upload de arquivos (documentos, imagens, etc.) para auxiliar nas conversas.
   - Utilizar um serviço de armazenamento de arquivos (Azure blob storage) para gerenciar os uploads.
   - Implementar verificação de tipo e tamanho de arquivo para garantir a segurança e o desempenho.

6. **Orquestração do Fluxo do Chat**:

   - Utilizar Langchain para orquestrar o fluxo do chat, integrando diferentes agentes para diversas funcionalidades.
   - Implementar agentes específicos para respostas automáticas, processamento de linguagem natural e análise de sentimentos.

7. **Controle de Tokens**:
   - Implementar controle de tokens para gerenciar as instâncias dos agentes e garantir que os tokens não sejam reutilizados indevidamente.
   - Implementar lógica para rotação de tokens e expiração automática.

## Estrutura do projeto

src/
├── domain/
│ ├── entities/
│ │ ├── user.entity.ts
│ │ ├── chat-session.entity.ts
│ │ ├── message.entity.ts
│ │ ├── file.entity.ts
│ │ └── token-usage.entity.ts
│ ├── repositories/
│ │ ├── user.repository.interface.ts
│ │ ├── chat.repository.interface.ts
│ │ └── token.repository.interface.ts
│ └── services/
│ └── ai-orchestrator.interface.ts
├── application/
│ ├── use-cases/
│ │ ├── auth/
│ │ ├── chat/
│ │ ├── file/
│ │ └── token/
│ ├── services/
│ │ ├── auth.service.ts
│ │ ├── chat.service.ts
│ │ ├── file.service.ts
│ │ └── token.service.ts
│ ├── dto/
│ │ ├── auth.dto.ts
│ │ ├── chat.dto.ts
│ │ └── file.dto.ts
│ └── exceptions/
│ └── custom-exceptions.ts
├── infrastructure/
│ ├── database/
│ │ ├── prisma/
│ │ │ ├── entities/
│ │ │ ├── repositories/
│ │ │ └── migrations/
│ │ └── redis/
│ ├── auth/
│ │ ├── jwt.strategy.ts
│ │ └── jwt-auth.guard.ts
│ ├── websocket/
│ │ ├── chat.gateway.ts
│ │ └── websocket-auth.middleware.ts
│ ├── file-upload/
│ │ ├── storage/
│ │ └── file-upload.service.ts
│ └── langchain/
│ ├── langchain.module.ts
│ └── langchain.service.ts
├── presentation/
│ ├── controllers/
│ │ ├── auth.controller.ts
│ │ ├── chat.controller.ts
│ │ └── file.controller.ts
│ ├── gateways/
│ │ └── chat.gateway.ts
│ ├── interceptors/
│ └── filters/
└── common/
│ ├── config/
│ │ └── configuration.ts
│ ├── decorators/
│ ├── guards/
│ └── utils/
└── chat.module.ts
└── file.module.ts
└── auth.module.ts
└── app.module.ts
└── main.ts
