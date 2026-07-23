import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CounterUpProps {
  value: string | number; // e.g., "$85M+", "98.4%", "142", "3.8x"
  duration?: number;
  className?: string;
}

export const CounterUp: React.FC<CounterUpProps> = ({
  value,
  duration = 2,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const strVal = String(value);
    // Extract prefix, numeric part, suffix, and decimal precision
    const match = strVal.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || '';
    const hasDecimal = match[2].includes('.');
    const decimals = hasDecimal ? match[2].split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      const formattedNum = decimals > 0 ? currentNum.toFixed(decimals) : Math.floor(currentNum).toString();
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(strVal);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
