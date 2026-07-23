import React from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`inline-block transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

