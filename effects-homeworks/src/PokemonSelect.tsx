import { useState } from "react"
import { PokemonInfo } from "./PokemonInfo";

export const PokemonSelect = () => {
    const [pokemon, setPokemon] = useState('pikachu');

    return <>
        <button onClick={() => setPokemon('pikachu')}>Pikachu</button>
        <button onClick={() => setPokemon('magikarp')}>Magikarp</button>
        <button onClick={() => setPokemon('cubone')}>Cubone</button>
        <button onClick={() => setPokemon('mew')}>Mew</button>
        <PokemonInfo name={pokemon} />
    </>
}
