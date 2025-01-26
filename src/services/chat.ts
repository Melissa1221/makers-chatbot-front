import { API_BASE_URL } from './api';

interface ChatResponse {
  response: string;
}

export const chatService = {
  async sendMessage(message: string): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data: ChatResponse = await response.json();
    return data.response;
  }
}; 