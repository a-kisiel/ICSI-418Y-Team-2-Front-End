import React from "react";
import "../styles/PlayerCard.css";
import ProgressBar from "./ProgressBar";
import { VisuallyHidden, ControlBox, Icon, Box } from "@chakra-ui/core";

export default function PlayerCard(props) {
  return (
    <div className="PlayerCard">
      <img
        className="PlayerImage"
        src="https://www.pngitem.com/pimgs/m/508-5088889_work-in-progress-logo-png-transparent-png.png"
        alt="PlayerImage"
        width="200px"
        height="150px"
      />

      <div className="PlayerDescription">
        <h4 style={{ padding: 0, margin: 0 }}>{props.name}</h4>
        <ProgressBar
          statName="RP (Max 100)"
          backgroundColor="black"
          color="orange"
          maxValue={100}
          value={props.rankingPoints}
        />
      </div>
      <label>
        <VisuallyHidden as="input" type="checkbox" defaultunChecked />
        <ControlBox
          id={`player${props.id}`}
          style={{ border: "1px solid white" }}
          borderWidth="1px"
          size="24px"
          rounded="sm"
          _checked={{
            bg: "red.500",
            color: "white",
            borderColor: "red.500",
          }}
          _focus={{ borderColor: "green.600", boxShadow: "outline" }}
        >
          <Icon name="check" size="16px" />
        </ControlBox>

        <Box as="span" verticalAlign="top" ml={3}>
          Select Player
        </Box>
      </label>
    </div>
  );
}
