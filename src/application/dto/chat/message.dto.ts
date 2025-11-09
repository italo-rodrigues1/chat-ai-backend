export interface ChatMessage {
  text: string;
  userId?: string;
  timestamp?: Date;
}

export interface ServerResponse {
  text: string;
  timestamp: Date;
  status: 'success' | 'error';
}
