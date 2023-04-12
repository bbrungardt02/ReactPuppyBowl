import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">AllPlayers</Link>
      <Link to="/NewPlayerForm">NewPlayerForm</Link>
    </div>
  );
}
