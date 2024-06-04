// src/Speedometer.js
import React from 'react';
import './Speedometer.css';

const Speedometer = ({ speed }) => {
  const getRotationDegree = () => {
    // Assuming the speedometer range is 0-180
    const maxSpeed = 50;
    const maxRotation = 180; // Half circle

    // Calculate rotation degree based on the speed
    return (speed / maxSpeed) * maxRotation;
  };

  return (
    <div className="speedometer">
      <div className="dial">
        <div className="needle" style={{ transform: `rotate(${getRotationDegree()}deg)` }}></div>
      </div>
      <div className="speed-display">{speed} BMI</div>
    </div>
  );
};

export default Speedometer;
