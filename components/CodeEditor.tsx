
import React from 'react';

interface CodeEditorProps {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ title, value, onChange }) => {
  return (
    <div className="flex flex-col h-full">
      <label className="text-lg font-semibold text-gray-300 mb-2">{title}</label>
      <textarea
        value={value}
        onChange={onChange}
        spellCheck="false"
        className="font-mono text-sm bg-gray-950 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none w-full flex-grow h-96 md:h-auto"
        placeholder="Enter your Python code here..."
      />
    </div>
  );
};

export default CodeEditor;
