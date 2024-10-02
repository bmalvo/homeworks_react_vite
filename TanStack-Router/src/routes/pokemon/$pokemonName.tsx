import { createFileRoute } from '@tanstack/react-router'
import { getPokemon } from './-loaders';

const SinglePokemon = () => {

    const { name, weight } = Route.useLoaderData();
    
    return <>
        <div>
            <p>Name: { name.toUpperCase()}</p>    
            <p>Weigth: { weight}kg</p>    
        </div>
    </>
}

export const Route = createFileRoute('/pokemon/$pokemonName')({
    loader: ({ params }) => getPokemon(params.pokemonName),
    staleTime: 5000,
    component: SinglePokemon,
    pendingComponent: () => <p>We are loading Your pokemon...</p>
})
