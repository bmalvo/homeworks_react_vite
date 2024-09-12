import { Params } from "react-router-dom"

export const pokemonLoader = ({ params }: { params: Params<'name'> }) => {

    const { name } = params;

    if (!name) return null;

    return fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
}