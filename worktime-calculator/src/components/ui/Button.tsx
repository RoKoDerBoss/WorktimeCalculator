import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "transition-colors focus:outline-none focus:ring-2 rounded-lg";
  
  const variantStyles = {
    primary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 focus:ring-offset-2 py-3 px-4 w-full",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 py-2 px-3",
    icon: "text-gray-500 hover:text-gray-700 focus:ring-gray-400"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}