import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom"
import { Hello } from "./Hello"
import { Home } from "./Home"
import { AboutUs } from "./AboutUs"
import { AboutCompany } from "./AboutCompany"
import { About } from "./About"
import { MainLayout } from "./MainLayout"
import { Product } from "./Product"
import { ProductDetails } from "./ProductDetails"
import { DynamicProduct } from "./DynamicProduct"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
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
      },
      {
        path: '*',
        element: <Navigate to='.' />
      }
    ]
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'product/details',
        element: <ProductDetails />
      },
      {
        path: '*',
        element: <Navigate to='/hello' />
      }
    ]
  },
  
  
])

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

        <Route path='/' element={ <Home />} />
        <Route path='/hello' element={<Hello />} />
        
        <Route path='about' element={<About />}>
        <Route index element={ <AboutUs />} />
        <Route path='company' element={<AboutCompany />} />
        <Route path='*' element={<Navigate to='.' />} />
        </Route>

          <Route path='product' element={ <Product />} />
          <Route path='product/details' element={<ProductDetails />} />
          <Route path='product/:productId/:additionalParam' element={<DynamicProduct /> } />
        </Route>
        
        <Route path='*' element={<Navigate to='hello' />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  )
}