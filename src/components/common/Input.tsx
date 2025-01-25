import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  withGradientBorder?: boolean;
}

export const Input: FC<InputProps> = ({ 
  className = '', 
  withGradientBorder = false,
  ...props 
}) => {
  return (
    <div className="relative group">
      {withGradientBorder && (
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-green rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      )}
      <input
        className={`relative w-full rounded-2xl px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-primary-blue/20 focus:border-primary-green focus:outline-none shadow-lg transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  );
}; 