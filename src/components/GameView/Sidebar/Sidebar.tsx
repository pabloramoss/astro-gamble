"use client";
import { useState } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
interface Props {
  finalNumber: number | null;
  currentNumber: number;
  handleBet: () => void;
  handleWithdraw: () => void;
  handleReset: () => void;
}
const Sidebar: React.FC<Props> = ({
  finalNumber,
  currentNumber,
  handleBet,
  handleWithdraw,
  handleReset,
}) => {
  const [value, setValue] = useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack width={300}>
      <Stack direction={"row"} spacing={2}>
        <Input placeholder="0.00" />
        <Button>1/2</Button>
        <Button>2x</Button>
        <Button>Max</Button>
      </Stack>
      {finalNumber === null && currentNumber === 1 ? (
        <Button onClick={handleBet}>Place Bet</Button>
      ) : (
        <Button onClick={handleWithdraw}>Cash out</Button>
      )}
    </Stack>
  );
};

export default Sidebar;
