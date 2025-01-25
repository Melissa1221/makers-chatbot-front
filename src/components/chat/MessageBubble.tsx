import { FC } from 'react';

interface MessageBubbleProps {
  isBot: boolean;
  text: string;
  timestamp: Date;
}

export const MessageBubble: FC<MessageBubbleProps> = ({ isBot, text, timestamp }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-scale`}>
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isBot
            ? 'bg-white/80 backdrop-blur-sm text-primary-dark'
            : 'bg-primary-purple text-white'
        } shadow-md`}
      >
        <p>{text}</p>
        <span className="text-xs opacity-70 mt-2 block">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}; 