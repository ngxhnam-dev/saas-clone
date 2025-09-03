import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  format?: 'number' | 'compact';
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  format = 'number',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1); // 0 → 1
      const easedProgress = easeOutCubic(progress); // easing
      const currentValue = Math.floor(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  const displayValue =
    format === 'compact'
      ? Intl.NumberFormat('en', { notation: 'compact' }).format(count)
      : count.toLocaleString();

  return (
    <h3>
      {displayValue}
      {suffix}
    </h3>
  );
};

export default Counter;
