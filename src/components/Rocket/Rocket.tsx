import { useState } from "react";

interface Props {
  value: number;
}
const Rocket: React.FC<Props> = ({ value }) => {
  return <div style={{ height: "100%", width: "100%", background: "red" }}>{value.toFixed(2)}</div>;
};

export default Rocket;
