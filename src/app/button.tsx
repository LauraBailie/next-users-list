import React from 'react';

// Define the props interface for type safety
interface ButtonProps {
  children: React.ReactNode; // The content inside the button
  onClick: () => void;      // The function to be called when the button is clicked
  className?: string;       // Optional CSS class for styling
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;