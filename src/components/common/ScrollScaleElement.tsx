import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollScaleElementProps {
  children: React.ReactNode;
  range?: [number, number]; // [startScale, endScale]
  className?: string;
}

export const ScrollScaleElement: React.FC<ScrollScaleElementProps> = ({ 
  children, 
  range = [0.8, 1.1], 
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  const scale = useTransform(scrollYProgress, [0, 1], range);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
