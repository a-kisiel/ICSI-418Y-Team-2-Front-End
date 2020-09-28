import React, { Component } from "react";

import "./Team.css";

class Teams extends Component {
  render() {
    return (
      <div className="main-team">
        <div className="wrapper">
          <div className="teams-container">
            <ul className="tabs-teams">
              <div className="tab-a-team">
                <li className="title-wrapper">
                  <div>
                    <img
                      className="create-team-img"
                      src={require("../logos/BOS.svg")}
                      alt="logo"
                    ></img>
                  </div>
                  <div className="team-title">BOS</div>
                </li>
              </div>
              <div className="tab-b-team">
                <li className="title-wrapper">
                  <div>
                    <img
                      className="create-team-img"
                      src={require("../logos/LAC.svg")}
                      alt="logo"
                    ></img>
                  </div>
                  <div className="team-title">LAC</div>
                </li>
              </div>
            </ul>
            <div className="player-list-wrapper">
              <div className="players-container">
                TEAM 1 players
                <table></table>
              </div>
              <div className="players-container">
                Team 2 Players
                <table></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
