import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Home } from "./Home"
import { Pokemon } from "./Pokemon"
import { pokemonLoader } from "./loaders/pokemon"
import { NoPokemon } from "./NoPokemon"
import { PokemonErrorElement } from "./PokemonErrorElement"

const routes = createBrowserRouter([
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'pokemon/:name',
        element: <Pokemon />,
        errorElement: <PokemonErrorElement />,
        loader: pokemonLoader
      },
      {
        path: 'pokemon',
        element: <NoPokemon />,
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='home'/>
  }
])

export const App = () => {

  return <RouterProvider router={routes} />
}