import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  withGradient?: boolean;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  withGradient = false,
  ...props 
}) => {
  const baseStyles = "transition-all duration-300";
  const variantStyles = {
    primary: "bg-primary-purple text-white hover:shadow-lg",
    secondary: "bg-white text-primary-dark border-2 border-primary-purple/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {withGradient && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple via-primary-blue to-gradient-purple opacity-0 group-hover:opacity-100 transition-all duration-500" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}; 