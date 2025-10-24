
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  onClick: () => void;
  isLoading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}

const MagicWandIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10.002 7.75a.75.75 0 00-1.164.887l1.325 2.65L8.84 12.612a.75.75 0 101.164.887l1.325-2.65 1.325 2.65a.75.75 0 101.164-.887L12.49 11.287l1.325-2.65a.75.75 0 10-1.164-.887L11.325 10.4l-1.323-2.65z" />
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
    </svg>
);


const Button: React.FC<ButtonProps> = ({ onClick, isLoading, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span className="ml-2">Analyzing...</span>
        </>
      ) : (
        <>
            <MagicWandIcon className="w-5 h-5 mr-2" />
            <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
