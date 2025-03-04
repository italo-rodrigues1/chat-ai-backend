## Estrutura do projeto

src/
├── domain/
│   ├── entities/
│   │   ├── user.entity.ts
│   │   ├── chat-session.entity.ts
│   │   ├── message.entity.ts
│   │   ├── file.entity.ts
│   │   └── token-usage.entity.ts
│   ├── repositories/
│   │   ├── user.repository.interface.ts
│   │   ├── chat.repository.interface.ts
│   │   └── token.repository.interface.ts
│   └── services/
│       └── ai-orchestrator.interface.ts
├── application/
│   ├── use-cases/
│   │   ├── auth/
│   │   ├── chat/
│   │   ├── file/
│   │   └── token/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── chat.service.ts
│   │   ├── file.service.ts
│   │   └── token.service.ts
│   ├── dto/
│   │   ├── auth.dto.ts
│   │   ├── chat.dto.ts
│   │   └── file.dto.ts
│   └── exceptions/
│       └── custom-exceptions.ts
├── infrastructure/
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── migrations/
│   │   └── redis/
│   ├── auth/
│   │   ├── jwt.strategy.ts
│   │   └── jwt-auth.guard.ts
│   ├── websocket/
│   │   ├── chat.gateway.ts
│   │   └── websocket-auth.middleware.ts
│   ├── file-upload/
│   │   ├── storage/
│   │   └── file-upload.service.ts
│   └── langchain/
│       ├── langchain.module.ts
│       └── langchain.service.ts
├── presentation/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── chat.controller.ts
│   │   └── file.controller.ts
│   ├── gateways/
│   │   └── chat.gateway.ts
│   ├── interceptors/
│   └── filters/
└── common/
│    ├── config/
│    │   └── configuration.ts
│    ├── decorators/
│    ├── guards/
│    └── utils/
└── app.module.ts
└── main.ts