export interface JwtPayload {
  sub: string; // ID do usuário (business identifier)
  name: string; // ID do usuário (business identifier)
  email: string; // Dado relevante para negócio
  role?: string; // Pode ser expandido com regras de autorização
}
