import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import { Hello } from "./Hello"

const router = createBrowserRouter([

  {
    path: '/',
    element: <Hello />
  }
])

export const App = () => {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={ <Hello />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}