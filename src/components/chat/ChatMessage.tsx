import { FC } from 'react';

interface ChatMessageProps {
  text: string;
  isBot: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({ text, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isBot
            ? 'bg-gradient-purple/10 rounded-tl-none'
            : 'bg-gradient-green/10 rounded-tr-none'
        }`}
      >
        <div className="whitespace-pre-line text-primary-dark">
          {text}
        </div>
      </div>
    </div>
  );
};
