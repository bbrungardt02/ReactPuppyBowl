import React, { useState } from "react";
import { postPlayer } from "../ajaxHelpers/puppies";

export default function CreatePlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <h2>Create a new Player!</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newPlayer = await postPlayer(name, breed);
          console.log("New Player from API: ", newPlayer);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="breed">Breed:</label>
        <input type="text" onChange={(e) => setBreed(e.target.value)} />
        <button>Submit!</button>
      </form>
    </div>
  );
}
