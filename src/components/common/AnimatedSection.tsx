import React from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  id
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 50, scale: 0.95, filter: 'blur(5px)' },
          visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50, scale: 0.95, filter: 'blur(5px)' },
          visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -50, scale: 0.95, filter: 'blur(5px)' },
          visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 50, scale: 0.95, filter: 'blur(5px)' },
          visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'none':
      default:
        return {
          hidden: { opacity: 0, filter: 'blur(5px)' },
          visible: { opacity: 1, filter: 'blur(0px)' }
        };
    }
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants()}
      transition={{
        duration: duration || 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
