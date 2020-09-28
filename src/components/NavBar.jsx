import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <h2 className="h2tagNav">NBA PENGUIN</h2>
          </li>
          <li>
            <h2 className="h2tagNav">My Team</h2>
          </li>
          <li>
            <h2 className="h2tagNav">My Tournaments</h2>
          </li>
          <li>
            <h2 className="h2tagNav">Contact Us</h2>
          </li>
          <li>
            <h2 className="h2tagNav">Profile</h2>
          </li>
          <li>
            <h2 className="h2tagNav">Login/Register</h2>
          </li>
        </ul>
      </nav>
    </div>
  );
}
