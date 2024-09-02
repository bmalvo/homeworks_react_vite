import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import { Hello } from "./Hello"
import { Home } from "./Home"

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: '/hello',
    element: <Hello />
  }
])

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/hello' element={ <Hello />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  )
}