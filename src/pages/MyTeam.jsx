import React from "react";
import NavBar from "../components/NavBar";
import "../styles/MyTeam.css";
import ProgressBar from "../components/ProgressBar";
import PlayerCard from "../components/PlayerCard";

const playersAvailable = [
  {
    name: "Player 1",
    rankingPoints: 100,
  },
  {
    name: "Player 2",
    rankingPoints: 70,
  },
  {
    name: "Player 3",
    rankingPoints: 68,
  },
  {
    name: "Player 4",
    rankingPoints: 61,
  },
  {
    name: "Player 5",
    rankingPoints: 56,
  },
  {
    name: "Player 6",
    rankingPoints: 37,
  },
  {
    name: "Player 7",
    rankingPoints: 75,
  },
  {
    name: "Player 8",
    rankingPoints: 83,
  },
  {
    name: "Player 9",
    rankingPoints: 92,
  },
  {
    name: "Player 10",
    rankingPoints: 100,
  },
];

function displayPlayerCards() {
  let players = [];

  for (let i = 0; i < players.length; i++) {
    players.push(
      <PlayerCard
        name={playersAvailable[i].name}
        rp={playersAvailable[i].rankingPoints}
      />
    );
  }

  return players;
}

export default function MyTeam(props) {
  return (
    <div className="MyTeam">
      <NavBar />
      <div className="MainDivMyTeam">
        <div className="teamImageCardContainer">
          <img
            className="TeamImage"
            src="https://www.w3schools.com/w3css/img_snowtops.jpg"
            alt="TeamImage"
            width="100%"
          />
          <div className="TeamDescription">
            <h2>{props.name}</h2>
            <hr style={{ border: "1px solid white" }} />
            <h2 style={{ margin: 0, padding: 0 }}>Team Status</h2>
            <ProgressBar
              statName="Combined Player RP (MAX: 400)"
              color="red"
              maxValue={400}
              value={200}
            />
          </div>
        </div>
        <div className="TeamPlayerSelection">
          <div className="playerSelectionNav">{displayPlayerCards()}</div>
        </div>
      </div>
    </div>
  );
}
