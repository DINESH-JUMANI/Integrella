import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ size = 24, color = 'white' }) => {
  return (
    <div 
      className="circular-progress"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        borderColor: color,
        borderTopColor: 'transparent' 
      }}
    />
  );
};

export default CircularProgress;
