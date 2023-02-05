"use client";
import { Component, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Button,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  Paper,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import RandomNumber from "./RandomNumber";
interface Props {
  onClick: () => void;
}
const Sidebar: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "400px",
        background: "white",
        border: "1px solid white",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Tabs
        aria-label="primary tabs example"
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleChange}
      >
        <Tab label="Manual" value="one" />
        <Tab label="Automatic" value="two" />
      </Tabs>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <p>$</p>
        <InputBase placeholder="0.00" sx={{ ml: 1, flex: 1 }} />
        <Button aria-label="menu" sx={{ p: "10px" }}>
          1/2
        </Button>
        <Button aria-label="search" sx={{ p: "10px" }} type="button">
          2x
        </Button>
        <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
        <Button aria-label="directions" color="primary" sx={{ p: "10px" }}>
          Max
        </Button>
      </Paper>
      <Button onClick={onClick}>Bet</Button>
      <RandomNumber />
    </div>
  );
};

export default Sidebar;
