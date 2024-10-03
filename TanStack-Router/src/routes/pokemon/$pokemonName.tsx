import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { getPokemon } from './-loaders';

type PokemonSearch = {

    page: number;
    pageSize: number;
    filters: string[];
}

const SinglePokemon = () => {

    const { name, weight } = Route.useLoaderData();
    const { page, pageSize, filters} = Route.useSearch();
    
    return <>
        <div>
            <h2>Pokemon info</h2>
            <p>Name: { name.toUpperCase()}</p>    
            <p>Weigth: {weight}kg</p>
            <h2>Page params:</h2>
            <p>page: {page}</p>
            <p>page size: {pageSize}</p>
            <p>filters: {filters.join(',')}</p>
            <Link to='.' search={prev => ({
                ...prev,
                page: (prev.page || 0) + 1
            })}>Next page</Link>
        </div>
    </>
}

export const Route = createFileRoute('/pokemon/$pokemonName')({
    loaderDeps: ({search}) => ({page: search.page}),
    loader: ({ params, deps: {page} }) => getPokemon(params.pokemonName),
    validateSearch: (search: Record<string, unknown>): PokemonSearch => ({

        page: Number(search?.page ?? 1),
        pageSize: Number(search?.pageSize ?? 100),
        filters: Array.isArray(search?.filters) ? search.filters.map(filter => filter.toString()) : []
    }),
    staleTime: 5000,
    component: SinglePokemon,
    pendingComponent: () => <p>We are loading Your pokemon...</p>
})
