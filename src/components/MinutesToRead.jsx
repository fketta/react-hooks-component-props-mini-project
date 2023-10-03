import React from 'react';

const MinutesToRead = ({ time }) => {
  const renderCoffeeCups = () => {
    const coffeeCups = Math.ceil(time / 5);
    return '☕️'.repeat(coffeeCups);
  };

  const renderBentoBoxes = () => {
    const bentoBoxes = Math.ceil(time / 10);
    return '🍱'.repeat(bentoBoxes);
  };

  return (
    <div>
      {time <= 30 ? renderCoffeeCups() : renderBentoBoxes()} {time} min read
    </div>
  );
};

export default MinutesToRead;