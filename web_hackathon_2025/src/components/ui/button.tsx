import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'link';
}

export const Button: React.FC<ButtonProps> = ({ variant, className, children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded text-sm font-medium transition-colors';
  const variantClasses = variant === 'outline' ? 'border border-white/30' : variant === 'link' ? 'text-blue-400' : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
