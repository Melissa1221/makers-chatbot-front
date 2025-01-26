import { FC, useState, useRef, useEffect } from 'react';
import { MessageBubble } from '../components/chat/MessageBubble';
import { TypingIndicator } from '../components/chat/TypingIndicator';
import { ChatHeader } from '../components/chat/ChatHeader';
import { ChatInput } from '../components/chat/ChatInput';
import { useChat } from '../hooks/useChat';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chat: FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy MakeBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, loading } = useChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    const response = await sendMessage(inputMessage);
    
    if (response) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }
    
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-purple via-white to-gradient-green">
      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-purple/10 rounded-full animate-float blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-green/10 rounded-full animate-float delay-1000 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-blue/10 rounded-full animate-float delay-2000 blur-3xl" />
      </div>

      {/* Chat Container */}
      <div className="relative max-w-4xl mx-auto h-screen p-4 flex flex-col">
        <ChatHeader />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              isBot={message.isBot}
              text={message.text}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
}; 