"use client";
import { useState } from "react";

import Results from "./Results";
import Rocket from "./Rocket";
import Sidebar from "./Sidebar";
function randomNumber() {
  return Math.random() * 10;
}

const View: React.FC = () => {
  const [value, setValue] = useState(1.0);

  function loopNumbers(n: number, interval: number) {
    let i = 1;
    const intervalId = setInterval(() => {
      setValue(i);
      console.log(i.toFixed(2));
      i += 0.01;
      if (i > n) {
        clearInterval(intervalId);
      }
    }, interval);

    console.log("finalizo");
  }

  const handleClick = () => {
    const finalValue = randomNumber();

    setValue(finalValue);
    loopNumbers(finalValue, 50);
  };

  return (
    <div style={{ height: "500px", width: "900px", background: "black" }}>
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <Sidebar onClick={handleClick} />
        <Rocket value={value} />
      </div>
      <Results />
    </div>
  );
};

export default View;
