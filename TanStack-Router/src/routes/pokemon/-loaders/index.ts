import { Pokemon } from "../../../types";
import { apiCall } from "../../../utils/apiCall";
import { defer } from "@tanstack/react-router";

export const getPokemon = async(pokemonName: string) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    return response.json() as Promise<Pokemon>;
}

export const getDeferredPokemon = async (pokemonName: string) => {

    console.log('deferred loader')

    const responsePromise = apiCall<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    return {
        deferredResponse: defer(responsePromise)
    }
}   