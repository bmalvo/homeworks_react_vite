import { Pokemon } from "../../../types";

export const getPokemon = async(pokemonName: string) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    return response.json() as Promise<Pokemon>;
}