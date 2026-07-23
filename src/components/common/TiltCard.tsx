import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  tiltDegree?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

