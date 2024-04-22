import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  abilities: {
    ability: {
      name: string;
    }
  }[]
}

type Props = {
  name: string;
}

export const PokemonInfo = ({name}: Props) => {

  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async (pokemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data: Pokemon = await response.json();
    setPokemon(data);
  }
  
  useEffect(() => {
    getPokemon(name);
  },[name])

    return <div>
        <h1>Name: { pokemon?.name}</h1>
        <h2>Abilities</h2>
        <ul>
        {pokemon?.abilities.map(({ ability }) => <li key={ability.name}>{ability.name}</li>)}
        </ul>
    </div>
}
