
import React from 'react';

const SparklesIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400"
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C10.193 6.705 11.537 6.333 12.834 7.034L13.5 7.4a.75.75 0 01.19.98l-1.637 3.275a.75.75 0 01-1.257-.14l-1.02-2.553a.75.75 0 00-1.257-.14L6.9 17.034a.75.75 0 01-1.15-.654L6.333 12.5c-.17-.978.33-1.95.982-2.606l2-2.31zm-3.18 8.019c.433.256.963.22 1.373-.095l2.086-1.668a.75.75 0 00.14-1.257L8.36 10.5a.75.75 0 00-.98-.19l-.666.367c-1.3.7-1.672 2.044-.793 2.922l2.31 2z"
      clipRule="evenodd"
    />
    <path d="M11.625 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path
      d="M13.81 19.555a.75.75 0 01.278-.546l.006-.005a.75.75 0 01.995.143l1.838 2.298a.75.75 0 01-.546 1.222l-2.298-1.838a.75.75 0 01-.273-.274zM16.5 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
    />
    <path
      d="M18.19 8.295a.75.75 0 01.546-.278l.005.006a.75.75 0 01.143.995l-2.298 1.838a.75.75 0 01-1.222-.546l1.838-2.298a.75.75 0 01.274-.273zM18.75 11.625a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"
    />
    <path
      d="M19.555 13.81a.75.75 0 01-.546.278l-.005-.006a.75.75 0 01-.143-.995l2.298-1.838a.75.75 0 011.222.546l-1.838 2.298a.75.75 0 01-.273.274z"
    />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        <SparklesIcon />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
          Python Code Corrector AI
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Paste your Python code using the Google Generative AI SDK below. Our AI will analyze it, fix errors, and explain the changes.
      </p>
    </header>
  );
};

export default Header;
