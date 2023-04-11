import React, { useState, useEffect } from "react";
import { fetchPlayers } from "./puppies";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div>
            <h4>{player.name}</h4>
            ...whatever you want to display
          </div>
        );
      })}
    </div>
  );
};

export default AllPlayers;
