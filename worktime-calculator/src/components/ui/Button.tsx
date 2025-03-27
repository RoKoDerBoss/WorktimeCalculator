import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = "transition-colors hover:ring-1 hover:ring-offset-1 rounded-lg";
  
  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700 hover:ring-green-700 py-3 px-10",
    secondary: "bg-gray-700 text-white hover:bg-gray-800 hover:ring-gray-900 py-3 px-10",
    icon: "text-gray-500 hover:text-gray-700 focus:ring-gray-400"
  };
  
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`disabled:pointer-events-none ${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-80 bg-gray-400 text-gray-200" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}