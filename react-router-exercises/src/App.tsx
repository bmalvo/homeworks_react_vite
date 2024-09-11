import { createBrowserRouter } from "react-router-dom"
import { Home } from "./Home"

const routes = createBrowserRouter([
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'pokemon/:name?'
      }
    ]
  }
])

export const App = () => {

  return null
}