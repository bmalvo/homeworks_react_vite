import { json, Params } from "react-router-dom"
import { PokemonError } from "../types/pokemon";

export const pokemonLoader = async ({ params }: { params: Params<'name'> }) => {

    const { name } = params;

    if (!name) return null;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (response.status === 404) {
        
        throw json({

            message: `Pokemon ${name} does not exist!`
        } as PokemonError, {
            status: 404
        })
    }

    return response.json();
}