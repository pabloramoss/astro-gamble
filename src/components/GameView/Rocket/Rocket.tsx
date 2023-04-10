import { Badge, Stack } from "@chakra-ui/react";

interface Props {
  currentNumber: number;
  finalNumber: number | null;

  /* fix this code, component error */
}
const Rocket: React.FC<Props> = ({ currentNumber, finalNumber }) => {
  return (
    <Stack background={"black"} width="100%">
      <p style={{ color: "white" }}>RocketView</p>
      <p style={{ color: "white" }}>{currentNumber.toFixed(2)}</p>
      {finalNumber !== null && <Badge>{finalNumber.toFixed(2)}</Badge>}
    </Stack>
  );
};

export default Rocket;
