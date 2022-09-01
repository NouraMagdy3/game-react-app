//import { GiantBomb_API_KEY } from "../config";

export const getAllGames = (limit) => {
  //const url = `https://www.giantbomb.com/api/accessory/[guid]/?api_key=${GiantBomb_API_KEY}&limit=${limit}`;
  const url = "https://swapi.dev/api/films";
  return fetch(url);
};
