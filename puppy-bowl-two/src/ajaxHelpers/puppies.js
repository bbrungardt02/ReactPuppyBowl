import AllPlayers from "../components/AllPlayers";

const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players";

export async function fetchPlayers() {
  try {
    const response = await fetch(baseUrl);
    const playersList = await response.json();
    return playersList;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const singlePlayer = await response.json();
    return singlePlayer;
  } catch (error) {
    console.error(error);
  }
}

export async function postPlayer(name, breed) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createdPlayer = await response.json();
    return createdPlayer;
  } catch (error) {
    console.error(error);
  }
}

export const removePlayer = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return;
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${id} from the roster!`,
      err
    );
  }
};
