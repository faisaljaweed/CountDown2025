import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

type TimeUnit = {
  value: number;
  label: string;
};

const CountdownTimer: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2025-01-01T00:00:00'));

  const timeUnits: TimeUnit[] = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      {timeUnits.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-lg p-4 md:p-6"
        >
          <span className="text-4xl md:text-6xl font-bold text-white mb-2">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base text-white/80">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;