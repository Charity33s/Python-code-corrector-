
import React from 'react';
import type { CorrectionResponse } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface CorrectionDisplayProps {
  correction: CorrectionResponse | null;
  isLoading: boolean;
}

const formatMarkdown = (text: string) => {
    // Basic markdown to HTML conversion
    const html = text
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-4 mb-2">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/`([^`]+)`/gim, '<code class="bg-gray-700 text-cyan-300 rounded px-1.5 py-0.5 font-mono text-sm">$1</code>')
        .replace(/^\s*[-*] (.*$)/gim, '<li class="ml-6 mb-1">$1</li>')
        .replace(/(\<li.*\>.*<\/li\>)/gim, '<ul>$1</ul>')
        .replace(/<\/ul\>\s*<ul\>/gim, ''); // merge lists

    return { __html: html };
}

const CorrectionDisplay: React.FC<CorrectionDisplayProps> = ({ correction, isLoading }) => {
  return (
    <div className="flex flex-col h-full bg-gray-950 border border-gray-700 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-300 mb-2">AI Analysis & Correction</h2>
      <div className="flex-grow overflow-auto">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <LoadingSpinner />
            <p className="mt-4 text-center">Analyzing your code... This may take a moment.</p>
          </div>
        )}
        {!isLoading && !correction && (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Your corrected code and explanation will appear here.</p>
          </div>
        )}
        {correction && (
          <div className="space-y-6">
            <div>
              <h3 className="text-md font-semibold text-cyan-400 mb-2">Corrected Code:</h3>
              <pre className="font-mono text-sm bg-gray-800 border border-gray-600 rounded-md p-3 overflow-x-auto">
                <code>{correction.corrected_code}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-md font-semibold text-cyan-400 mb-2">Explanation:</h3>
              <div className="prose prose-sm prose-invert text-gray-300 max-w-none" dangerouslySetInnerHTML={formatMarkdown(correction.explanation)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorrectionDisplay;
