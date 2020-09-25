import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <h2>NBA PENGUIN</h2>
          </li>
          <li>
            <h2>My Team</h2>
          </li>
          <li>
            <h2>My Tournaments</h2>
          </li>
          <li>
            <h2>Contact Us</h2>
          </li>
          <li>
            <h2>Profile</h2>
          </li>
          <li>
            <h2>Login/Register</h2>
          </li>
        </ul>
      </nav>
    </div>
  );
}
