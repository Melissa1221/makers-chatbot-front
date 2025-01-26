import { FC } from 'react';

interface ChatMessageProps {
  text: string;
  isBot: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({ text, isBot }) => {
  // Format text to display products vertically
  const formattedText = text.split('\n').map((line, i) => {
    // Check if line contains product info (starts with number)
    const isProduct = /^\d+\./.test(line);
    
    return (
      <span key={i} className={`block ${isProduct ? 'mt-2' : ''}`}>
        {line}
      </span>
    );
  });

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] p-4 rounded-2xl ${
        isBot 
          ? 'bg-gradient-purple/10 rounded-tl-none' 
          : 'bg-gradient-green/10 rounded-tr-none'
      }`}>
        <div className="whitespace-pre-wrap space-y-1">{formattedText}</div>
      </div>
    </div>
  );
}; 