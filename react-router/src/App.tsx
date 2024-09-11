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
import { FooBar } from "./FooBar"
import { Content } from "./Content"
import { Payment } from "./Payment"
import { Dashboard } from "./Dashboard"
import { ProtectedRoute } from "./routes/ProtectedRoute"
import { DataComponent } from "./DataComponent"
import { ErrorElement } from "./ErrorElement"
import { MyIp } from "./MyIp"
import { GlobalErrorBoundary } from "./GlobalErrorBoundary"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <GlobalErrorBoundary />,
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
        path: '/path-with-loader/:id?',
        element: <DataComponent />,
        errorElement: <ErrorElement />,
        loader: async ({ request, params }) => {
          console.log('request: ', request)
          console.log('params: ', params)
          return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
              resolve(`loader... - ${params.id}`);
            }, 2000)
        })
        }
      },
    {
        path: '/ip-address',
        element: <MyIp />,
        errorElement: <ErrorElement />,
        loader: async () => {
          return fetch('https://api.ipify.org?format=json')
        }
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<MainLayout />}>

    //     <Route path='/' element={ <Home />} />
    //     <Route path='/hello' element={<Hello />} />
          
    //     <Route element={<ProtectedRoute />} >
    //     <Route path='/dashboard' element={ <Dashboard />} />
    //     </Route>
        
    //     <Route path='about' element={<About />}>
    //     <Route index element={ <AboutUs />} />
    //     <Route path='company' element={<AboutCompany />} />
    //     <Route path='*' element={<Navigate to='.' />} />
    //     </Route>

    //     <Route path='product' element={ <Product />} />
    //     <Route path='product/details' element={<ProductDetails />} />
    //     <Route path='product/:productId/:additionalParam?' element={<DynamicProduct />} />
    //     <Route path='/foo/bar?' element={<FooBar />} />
    //     <Route path='/:lang?/content' element={<Content />} />

    //     <Route path='/payment' element={<Payment />} />

    //     </Route>
        
    //     <Route path='*' element={<Navigate to='hello' />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}