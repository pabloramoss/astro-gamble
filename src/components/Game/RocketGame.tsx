import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`;

const launch = keyframes`
  0% {
    bottom: 0;
    transform: rotateZ(0);
  }
  50% {
    bottom: 70%;
    transform: rotateZ(10deg);
  }
  100% {
    bottom: 70%;
    transform: rotateZ(0);
  }
`;

const RocketImg = styled.img`
  /* Estilos adicionales para la imagen */
  &.rocket-animation {
    animation: ${move} 2s ease-in-out infinite;
  }
  &.rocket-launch {
    animation: ${launch} 10s ease-in-out infinite;
  }
`;

const RocketGame = () => {
  const [countdown, setCountdown] = useState(3);
  const [isLaunched, setIsLaunched] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // Genera el número aleatorio
    setRandomNumber(Math.ceil(Math.random() * 10));

    if (countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsLaunched(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (isLaunched && !isExploded) {
      const intervalId = setInterval(() => {
        setCurrentNumber((prevNumber) => prevNumber + 0.01);
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [isLaunched, isExploded]);

  useEffect(() => {
    if (currentNumber >= randomNumber && !isExploded) {
      setIsExploded(true);
      setTimeout(() => {
        setCountdown(3);
        setIsLaunched(false);
        setIsExploded(false);
        setCurrentNumber(0);
      }, 5000);
    }
  }, [currentNumber, randomNumber, isExploded]);

  const handleRocketClick = () => {
    if (isLaunched && !isExploded) {
      setIsExploded(true);
      setTimeout(() => {
        setCountdown(3);
        setIsLaunched(false);
        setIsExploded(false);
        setCurrentNumber(0);
      }, 5000);
    }
  };

  return (
    <div className="container">
      {!isLaunched && <div className="countdown">{countdown}</div>}
      <RocketImg
        alt="Rocket"
        className={`rocket ${isLaunched && !isExploded ? "rocket-animation rocket-launch" : ""} ${
          isExploded ? "rocket-explode" : ""
        }`}
        src="/public/assets/rocket.jpg"
        onClick={handleRocketClick}
      />
      <div className="number">{currentNumber.toFixed(2)}</div>
    </div>
  );
};

export default RocketGame;
