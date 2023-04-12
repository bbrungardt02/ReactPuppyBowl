import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlayers } from "../ajaxHelpers/puppies";

export default function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const playersList = await fetchPlayers();
      setPlayers(playersList.data.players);
    }
    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h4 onClick={() => navigate(`/${player.id}`)}>{player.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
