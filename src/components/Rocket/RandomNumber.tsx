import React, { useState, useEffect } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(Math.random() * 5);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [finalNumber, setFinalNumber] = useState<any>(null);

  useEffect(() => {
    if (currentNumber >= number) {
      clearInterval(intervalId);
      if (finalNumber === null) {
        alert("Perdiste");
      }
    }
  }, [currentNumber, number, intervalId, finalNumber]);

  const handleBet = () => {
    const id = setInterval(() => {
      setCurrentNumber((prevCurrentNumber) =>
        prevCurrentNumber < number ? prevCurrentNumber + 0.01 : number,
      );
    }, 50);

    setIntervalId(id);
  };

  const handleWithdraw = () => {
    setFinalNumber(currentNumber);
  };

  const handleReset = () => {
    setNumber(Math.random() * 5);
    setCurrentNumber(1);
    setFinalNumber(null);
  };

  const finaliced = number === currentNumber;

  return (
    <div style={{ color: "black" }}>
      <div>{currentNumber.toFixed(2)}</div>
      <button onClick={handleBet}>Apostar</button>
      <button onClick={handleWithdraw}>Retirarse</button>
      {finaliced && finalNumber === null && <div>Perdiste</div>}
      {finalNumber !== null && <div>El valor final es: {finalNumber.toFixed(2)}</div>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RandomNumber;
