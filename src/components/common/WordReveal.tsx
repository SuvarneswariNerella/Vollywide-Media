import React from 'react';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent'
}) => {
  const words = text.split(' ');

  return (
    <span className={`inline ${className}`}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase() || word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={idx} className={isHighlight ? highlightClass : ''}>
            {word}{idx < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
};

