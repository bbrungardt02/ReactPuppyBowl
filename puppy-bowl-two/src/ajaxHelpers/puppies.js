export async function fetchPlayers() {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players"
  );
  const players = await response.json();
  return players;
}
