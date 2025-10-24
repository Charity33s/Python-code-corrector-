
import React, { useState, useCallback } from 'react';
import { correctPythonCode } from './services/geminiService';
import type { CorrectionResponse } from './types';
import CodeEditor from './components/CodeEditor';
import CorrectionDisplay from './components/CorrectionDisplay';
import Button from './components/Button';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import { INITIAL_CODE } from './constants';

const App: React.FC = () => {
  const [userCode, setUserCode] = useState<string>(INITIAL_CODE);
  const [correction, setCorrection] = useState<CorrectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCorrectCode = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCorrection(null);

    try {
      const result = await correctPythonCode(userCode);
      setCorrection(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [userCode]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CodeEditor
            title="Your Python Code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
          <CorrectionDisplay
            correction={correction}
            isLoading={isLoading}
          />
        </div>

        <div className="mt-6 flex flex-col items-center">
          <Button
            onClick={handleCorrectCode}
            isLoading={isLoading}
            disabled={isLoading || !userCode.trim()}
          >
            Correct Code
          </Button>
          {error && <ErrorMessage message={error} />}
        </div>
      </main>
    </div>
  );
};

export default App;
