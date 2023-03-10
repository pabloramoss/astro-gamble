import React, { useState, useEffect } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(Math.random() * 4);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [finalNumber, setFinalNumber] = useState<any>(null);
  const [finalMessage, setFinalMessage] = useState("");

  useEffect(() => {
    if (currentNumber >= number) {
      clearInterval(intervalId);
      if (finalNumber === null) {
        setFinalMessage("Perdiste");
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
    setFinalMessage("");
  };

  return (
    <div style={{ color: "black" }}>
      <div>{currentNumber.toFixed(2)}</div>

      {finalNumber === null && currentNumber === 1 ? (
        <button onClick={handleBet}>Apostar</button>
      ) : (
        <button onClick={handleWithdraw}>Retirarse</button>
      )}

      {finalMessage === "Perdiste" && <div>Perdiste</div>}
      {finalNumber !== null && <div>El valor final es: {finalNumber.toFixed(2)}</div>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RandomNumber;
