import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../ajaxHelpers/puppies";

export default function AllPlayers() {
  const [thePlayers, setThePlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const players = await fetchPlayers();
      setThePlayers(players);
    }
    getPlayers();
  }, []);

  return (
    <div>
      {theplayers.map((player) => {
        return (
          <div>
            <h4>{player.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
