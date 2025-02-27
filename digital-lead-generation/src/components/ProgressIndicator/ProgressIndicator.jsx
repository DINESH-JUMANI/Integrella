import React, { useState, useEffect } from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-status">Your image is being generated</div>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default ProgressIndicator;
