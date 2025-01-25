import { FC } from 'react';

export const TypingIndicator: FC = () => {
  return (
    <div className="flex justify-start animate-scale">
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-primary-purple rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-primary-purple rounded-full animate-bounce delay-100" />
          <span className="w-2 h-2 bg-primary-purple rounded-full animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
}; 