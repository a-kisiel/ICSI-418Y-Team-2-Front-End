import React from "react";
import "../styles/GlobalLeaderboard.css";

const mockTeams = [
  {
    TeamName: "Team 1 Name",
    Points: 86,
    Position: 1,
  },
  {
    TeamName: "Team 2 Name",
    Points: 77,
    Position: 2,
  },
  {
    TeamName: "Team 3 Name",
    Points: 74,
    Position: 3,
  },
  {
    TeamName: "Team 4 Name",
    Points: 54,
    Position: 4,
  },
  {
    TeamName: "Team 5 Name",
    Points: 47,
    Position: 5,
  },
  {
    TeamName: "Team 6 Name",
    Points: 43,
    Position: 6,
  },
  {
    TeamName: "Team 7 Name",
    Points: 42,
    Position: 7,
  },
  {
    TeamName: "Team 8 Name",
    Points: 31,
    Position: 8,
  },
  {
    TeamName: "Team 9 Name",
    Points: 24,
    Position: 9,
  },
  {
    TeamName: "Team 10 Name",
    Points: 21,
    Position: 10,
  },
  {
    TeamName: "Team 11 Name",
    Points: 18,
    Position: 11,
  },
  {
    TeamName: "Team 12 Name",
    Points: 14,
    Position: 12,
  },
];

function mockLeaderboardDivs() {
  let teams = [];

  for (let i = 0; i < 12; i++) {
    teams.push(
      <div className="LeaderboardSlot">
        <div className="LeaderboardPosition">
          <h3 className="h3TagLeaderboard">{mockTeams[i].Position}</h3>
        </div>
        <div className="LeaderboardTeamName">
          <h3 className="h3TagLeaderboard">{mockTeams[i].TeamName}</h3>
        </div>
        <div className="LeaderboardPoints">
          <h3 className="h3TagLeaderboard">{mockTeams[i].Points}</h3>
        </div>
        {i !== 11 ? (
          <hr
            style={{
              border: "2px solid rgb(53, 83, 83)",
              margin: 0,
              padding: 0,
            }}
          />
        ) : null}
      </div>
    );
  }
  return teams;
}

export default function GlobalLeaderboard() {
  return (
    <div className="GlobalLeaderboard">
      <h3 className="GPLTitle">Global Point Leaderboard</h3>
      <hr
        style={{ border: "2px solid rgb(53, 83, 83)", margin: 0, padding: 0 }}
      />
      <div className="LeaderboardPosition">
        <h3 className="h3TagLeaderboard">#</h3>
      </div>
      <div className="LeaderboardTeamName">
        <h3 className="h3TagLeaderboard">TeamName</h3>
      </div>
      <div className="LeaderboardPoints">
        <h3 className="h3TagLeaderboard">Points</h3>
      </div>
      <hr
        style={{ border: "2px solid rgb(53, 83, 83)", margin: 0, padding: 0 }}
      />
      <div>{mockLeaderboardDivs()}</div>
    </div>
  );
}
