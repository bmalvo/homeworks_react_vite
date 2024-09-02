import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import { Hello } from "./Hello"
import { Home } from "./Home"
import { AboutUs } from "./AboutUs"
import { AboutCompany } from "./AboutCompany"
import { About } from "./About"

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: '/hello',
    element: <Hello />
  },
  {
    path: 'about',
    element: <About />,
    children: [
      {
        index: true,
        element: <AboutUs />
      },
      {
        path: 'company',
        element: <AboutCompany />
      }
    ]
  }
  
])

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/hello' element={<Hello />} />
        
        <Route path='about' element={<About />}>
        <Route index element={ <AboutUs />} />
        <Route path='company' element={ <AboutCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  )
}