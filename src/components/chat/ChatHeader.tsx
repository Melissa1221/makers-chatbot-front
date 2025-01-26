import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ChatHeader: FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-t-2xl p-4 border-b border-primary-purple/20">
      <div className="flex items-center justify-between">
        <Link 
          to="/home"
          className="flex items-center gap-2 text-primary-dark hover:text-primary-purple transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Volver</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" />
          <span className="text-primary-dark font-semibold">MakeBot</span>
        </div>
      </div>
    </div>
  );
}; 