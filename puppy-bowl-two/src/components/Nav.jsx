import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link className="nav" to="/">
        AllPlayers
      </Link>
      <Link className="nav" to="/NewPlayerForm">
        New Player Form
      </Link>
    </div>
  );
}
