import React from "react";
import "../styles/PlayerCard.css";

export default function PlayerCard(props) {
  return (
    <div className="PlayerCard">
      <img
        className="PlayerImage"
        src="https://www.w3schools.com/w3css/img_snowtops.jpg"
        alt="PlayerImage"
        width="100%"
      />
      <div className="PlayerDescription">
        <h2>name: {props.name}</h2>
        <h2 style={{ margin: 0, padding: 0 }}>RP: {props.rankingpoints}</h2>
      </div>
    </div>
  );
}
