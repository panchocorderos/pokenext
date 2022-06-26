import axios from "axios";

export const pokeApi = axios.create({
  baseURL: "https://www.pokemon.com/el",
});

type PokemonResponse = {
  abilities: string[];
  detailPageURL: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: string[];
};

export const useGetPokemons = async () => {
  const { data } = await pokeApi.get<PokemonResponse[]>("/api/pokedex/kalos");
  let storage = new Set<number>();
  const cleanedData = data
    .filter((pokemon) => {
      // Delete duplicates
      if (storage.has(pokemon.id)) {
        return false;
      } else {
        storage.add(pokemon.id);
        return true;
      }
    })
    .map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        number: pokemon.number,
        image: pokemon.ThumbnailImage,
        types: pokemon.type,
      };
    });
  return cleanedData;
};
