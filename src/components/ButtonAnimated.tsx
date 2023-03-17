import React from "react";
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

const Button = styled.button`
  /* Estilos del botón */
  position: relative;
  animation: ${move} 4s ease-in-out infinite;
`;

const AnimatedButton = () => {
  return <Button>Animated Button</Button>;
};

export default AnimatedButton;
