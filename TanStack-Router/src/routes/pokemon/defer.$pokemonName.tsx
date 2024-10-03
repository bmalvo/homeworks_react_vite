import { Await, createFileRoute} from '@tanstack/react-router'
import { getDeferredPokemon} from './-loaders'
import { Suspense, useEffect } from 'react'


const SingleDeferPokemon = () => {
    const { defferedResponse } = Route.useLoaderData()
    
    useEffect(() => {

        console.log('Mounted')
    })

  return (
    <>
        <div>
            <Suspense fallback="Loading...">
                <Await promise={defferedResponse}>
                      {({ name, weight }) => <div>
                          <h1>{name} </h1>
                          <p>{ weight}</p>
                      </div>}
                </Await>
            </Suspense> 
         </div>
    </>
  )
}

export const Route = createFileRoute('/pokemon/defer/$pokemonName')({
    loader: ({ params }) => getDeferredPokemon(params.pokemonName),
  component: SingleDeferPokemon,
})
