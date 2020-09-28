import React from "react";
import "./styles/App.css";
import MyTeam from "./pages/MyTeam";
import HomePage from "./pages/HomePage";

export default function App() {
  return <div className="App">
    <MyTeam name="NBA Penguin Gang" />
  </div>;
}