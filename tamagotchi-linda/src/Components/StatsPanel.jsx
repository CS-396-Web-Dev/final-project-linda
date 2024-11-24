import React from 'react';
import Bar from './BarTracker';

const StatsPanel = () => {
  // Example stat values
  const stats = [
    { label: 'Hunger', value: 30, maxValue: 100, color: '#89CFF0' }, // Light blue
    { label: 'Happiness', value: 80, maxValue: 100, color: '#FFD1DC' }, // Pink
    { label: 'Energy', value: 60, maxValue: 100, color: '#8F99FB' }, // Periwinkle
    { label: 'Growth Stage', value: 40, maxValue: 100, color: '#1D3461' }, // Dark blue
  ];

  return (
    <div className="w-[300px] p-6 bg-[#F8F7FF] rounded-lg shadow-lg flex flex-col space-y-4">
      {stats.map((stat, index) => (
        <Bar
          key={index}
          label={stat.label}
          value={stat.value}
          maxValue={stat.maxValue}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsPanel;
