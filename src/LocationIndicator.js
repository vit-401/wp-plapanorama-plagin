import React, { useState, useEffect } from 'react';

const LocationIndicator = ({ size = 50 }) => {
  const [direction, setDirection] = useState(0);

  // Це можна замінити на реальні дані з сенсорів пристрою або API, наприклад:
  // navigator.geolocation.watchPosition(...)
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevDirection) => prevDirection + 5); // Для прикладу, зміна напрямку
    }, 100);
    return () => clearInterval(interval);
  }, []);
  // Основні розміри
  const circleRadius = size * 0.15; // Радіус кружка
  const triangleHeight = circleRadius * 2; // Висота трикутника
  const triangleBase = circleRadius *3; // Основа трикутника
  const blurStdDeviation = size * 0.05; // Розмиття
  return (
    <svg >
      {/* Розмитий трикутник */}
      <defs>
        <filter id="blur-filter">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>
      <polygon
        points="50,40 80,85 20,85"
        fill="blue"
        opacity="0.5"
        filter="url(#blur-filter)"
        transform={`rotate(${direction}, 50, 50)`}
      />

      {/* Центральний кружок */}
      <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="3" fill="blue"/>
    </svg>
  );
};

export default LocationIndicator;
