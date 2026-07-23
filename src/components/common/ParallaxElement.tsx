import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxElementProps {
  children: React.ReactNode;
  offset?: number; // How much it moves
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({ 
  children, 
  offset = 50, 
  className = '',
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const getTransformRange = () => {
    switch (direction) {
      case 'up': return [offset, -offset];
      case 'down': return [-offset, offset];
      case 'left': return [offset, -offset];
      case 'right': return [-offset, offset];
      default: return [offset, -offset];
    }
  };

  const transformValue = useTransform(scrollYProgress, [0, 1], getTransformRange());

  return (
    <motion.div
      ref={ref}
      style={
        direction === 'up' || direction === 'down' 
          ? { y: transformValue }
          : { x: transformValue }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};
