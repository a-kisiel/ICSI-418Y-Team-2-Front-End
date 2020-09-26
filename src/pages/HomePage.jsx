import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Homepage.css";
import LeagueNews from "../components/LeagueNews";
import MainChat from "../components/MainChat";

export default function Homepage() {
  return (
    <div className="Homepage">
      <NavBar />
      <LeagueNews />
      <MainChat />
    </div>
  );
}
