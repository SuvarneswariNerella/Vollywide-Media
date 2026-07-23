import React from 'react';
import { motion } from 'motion/react';

interface MarqueeItem {
  name: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[] | string[];
  direction?: 'left' | 'right';
  speed?: number; // seconds for full loop
  className?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  direction = 'left',
  speed = 25,
  className = '',
}) => {
  // Duplicate array to ensure seamless infinite loop
  const itemList = items.map(item => (typeof item === 'string' ? { name: item } : item));
  const duplicatedList = [...itemList, ...itemList, ...itemList, ...itemList];

  return (
    <div className={`relative overflow-hidden py-4 w-full select-none ${className}`}>
      {/* Gradient Fades on Left & Right Edges */}
      <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafafd] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafafd] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-6 sm:gap-10 w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
      >
        {duplicatedList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm text-slate-800 text-xs sm:text-sm font-semibold hover:border-indigo-300 transition-colors"
          >
            {item.icon && <span className="text-indigo-600">{item.icon}</span>}
            <span>{item.name}</span>
            {item.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
