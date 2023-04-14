import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlayers, removePlayer } from "../ajaxHelpers/puppies";

export default function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  console.log(players);
  useEffect(() => {
    async function getPlayers() {
      const playersList = await fetchPlayers();
      setPlayers(playersList.data.players);
    }
    getPlayers();
  }, []);

  return (
    <div id="allPlayers">
      {players.map((player) => {
        return (
          <div key={player.id} className="singlePlayerCard">
            <p
              className="playerTitle"
              onClick={() => navigate(`/${player.id}`)}
            >
              {player.name}
            </p>
            <p className="playerNumber">#{player.id}</p>
            <p className="playerBreed">{player.breed}</p>
            <p className="playerStatus">Status: {player.status}</p>
            <img className="playerPhoto" src={player.imageUrl}></img>
            <h1 onClick={removePlayer}>Remove Player</h1>
          </div>
        );
      })}
    </div>
  );
}
