import { api } from './api';

interface ChatResponse {
  response: string;
}

export const chatService = {
  async sendMessage(message: string): Promise<string> {
    const response = await api.post<ChatResponse>('/chat', { message });
    return response.response;
  }
}; 