import { useState } from 'react';
import { chatService } from '../services/chat';

export const useChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      const response = await chatService.sendMessage(message);
      setError(null);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}; 