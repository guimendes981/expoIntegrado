
import React, { useState } from 'react';

const ClickableCard = ({ backgroundColor }) => {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    setFact(data.fact);
  };

  return (
    <div
      style={{ backgroundColor, height: 300, cursor: 'pointer' }}
      onClick={fetchCatFact}
    >
      <p>Cat Fact:</p>
      <p>{fact}</p>
    </div>
  );
};

export default ClickableCard;
