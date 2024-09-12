import { useLoaderData } from "react-router-dom";
import { SinglePokemon } from "./types/pokemon";

export const Pokemon = () => {

    const pokemon = useLoaderData() as SinglePokemon;

    const { id, name, weight, height, types } = pokemon
    

    return <div>
        <p>Name: { name }</p>
        <p>Id: { id }</p>
        <p>Height: { height }</p>
        <p>Weight: { weight }</p>
        <p>Type: { types[0].type.name }</p>
    </div>
}