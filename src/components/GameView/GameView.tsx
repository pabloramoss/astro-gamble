import { Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Rocket } from "./Rocket";
import { Sidebar } from "./Sidebar";

const GameView: React.FC = () => {
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
      console.log(currentNumber);
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
    <Stack height={500} width={900}>
      <p>RocketView</p>
      <p>RocketView</p>
      <Stack direction="row" height={"100%"}>
        <Sidebar
          currentNumber={currentNumber}
          finalNumber={finalNumber}
          handleBet={handleBet}
          handleReset={handleReset}
          handleWithdraw={handleWithdraw}
        />
        <Rocket currentNumber={currentNumber} finalNumber={finalNumber} />
      </Stack>
      <Flex background={"grey"} height={10} />
    </Stack>
  );
};

export default GameView;
