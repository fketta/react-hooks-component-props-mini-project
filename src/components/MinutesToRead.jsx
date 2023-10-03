import React from 'react';

const MinutesToRead = ({ minutes }) => {
  const renderIcons = (icon, count) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index}>{icon}</span>
    ));
  };

  const coffeeCount = Math.ceil(minutes / 5);
  const bentoCount = Math.ceil(minutes / 10);

  return (
    <div>
      {minutes <= 30
        ? renderIcons('☕️', coffeeCount)
        : renderIcons('🍱', bentoCount)}
      {minutes} min read
    </div>
  );
};

export default MinutesToRead;