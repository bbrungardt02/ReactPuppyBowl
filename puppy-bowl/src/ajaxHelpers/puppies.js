export async function fetchPlayers() {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/players"
  );
  const data = await response.json();
  return data;
}
