import React from 'react';

const Bar = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="mb-4">
      <span className="block text-sm font-bold text-[#1D3461] mb-1">{label}</span>
      <div className="w-full h-5 bg-[#F8F7FF] rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
