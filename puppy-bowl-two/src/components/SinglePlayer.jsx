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
    <div className="singlePlayerView">
      {player && (
        <ul>
          <li className="playerTitle">Name: {player.data.player.name}</li>
          <li className="playerNumber">#{player.data.player.id}</li>
          <li className="playerBreed">Breed: {player.data.player.breed}</li>
          <li className="playerStatus">Status: {player.data.player.status}</li>
          <img className="playerPhoto" src={player.data.player.imageUrl}></img>
        </ul>
      )}
    </div>
  );
}
