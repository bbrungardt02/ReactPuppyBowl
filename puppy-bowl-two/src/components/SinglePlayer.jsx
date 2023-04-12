import React, { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../ajaxHelpers/puppies";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const playerFromApi = await fetchSinglePlayer(playerId);
      setPlayer(playerFromApi);
    }
    getPlayer();
  }, []);

  console.log("Player: ", player);

  return (
    <div>
      {player && (
        <ul>
          <li>Name: {player.data.player.name}</li>
          <li>Breed: {player.data.player.breed}</li>
          <li>Status: {player.data.player.status}</li>
        </ul>
      )}
    </div>
  );
}
