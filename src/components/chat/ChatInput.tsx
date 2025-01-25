import { FC, ChangeEvent, KeyboardEvent } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export const ChatInput: FC<ChatInputProps> = ({ value, onChange, onSend }) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl p-4 border-t border-primary-purple/20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-green rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        <div className="relative flex gap-2">
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-1 p-3 rounded-xl bg-white/80 border-2 border-primary-blue/20 focus:border-primary-green focus:outline-none transition-all duration-300"
          />
          <button
            onClick={onSend}
            className="bg-primary-purple text-white px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}; 