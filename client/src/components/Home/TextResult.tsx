import { FileText, Clipboard, ClipboardCheck, Loader2 } from "lucide-react";
import React, { useState } from "react";

interface TextResultProps {
  text: string | null;
  isLoading: boolean;
}

const TextResult: React.FC<TextResultProps> = ({ text, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-9 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-500" />
          Extracted Text
        </h2>
        {text && (
          <button
            onClick={handleCopy}
            className="text-gray-600 hover:text-gray-800 transition p-2"
          >
            {copied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
          </button>
        )}
      </div>

      <div className="h-64 w-full bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-auto text-gray-800 text-sm leading-relaxed flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="h-12 w-12 animate-spin mb-3" />
            <p>Extracting text...</p>
          </div>
        ) : text ? (
          <p className="whitespace-pre-wrap w-full">{text}</p>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <FileText className="h-16 w-16 mb-3 opacity-20" />
            <p>Upload an image to extract text</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextResult;