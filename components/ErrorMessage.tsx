
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="mt-4 p-4 w-full max-w-2xl bg-red-900/50 border border-red-700 text-red-300 rounded-md text-center">
      <p className="font-semibold">An Error Occurred</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;
