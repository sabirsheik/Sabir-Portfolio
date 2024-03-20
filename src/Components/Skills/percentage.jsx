import React, { useState, useEffect } from 'react';

function Counter({ endingPercentage }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === endingPercentage) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [counter, endingPercentage]);

  return (
    <div className="counter">
      {counter}%
    </div>
  );
}



export default Counter;
