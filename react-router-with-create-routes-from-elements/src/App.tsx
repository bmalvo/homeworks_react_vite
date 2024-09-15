import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from "react-router-dom"
import { MainLayout } from "./MainLayout"
import { Account } from "./Account"
import { lazy, Suspense } from "react";
import { aboutLoader } from "./loaders/about";
// import { About } from "./About"

//  1- classic way

// export const App = () => {

//   return <>
//     <BrowserRouter >
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path='account' element={<Account />} />
//           <Route path='about' element={<About />} />
//           <Route path='*' element={<Navigate to='account' />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </>
// }

// 2- using creatBrowserRouter

// const router = createBrowserRouter([

//   {
//     element: <MainLayout />,
//     children: [

//       {
//         path: 'account',
//         element: <Account />,
//         loader: () => {
//           console.log('loader is running')
//           return 'lorem ipsum'
//         }
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: '*',
//         element: <Navigate to='account' />
//       }
//     ]
//   }
// ])

// export const App = () => {

//   return <>
//     <RouterProvider router={ router} />
//   </>
// }

//  3- using createRoutesFromElements

const About = lazy(() => import('./About'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route
      path='account'
      element={<Account />}
      loader={aboutLoader} />
    <Route
      path='about'
      loader={aboutLoader}
      lazy={() => import('./routes/About')}
      element={<About />} />
    <Route
      path='*'
      element={<Navigate to='account' />} />
  </Route>
));

export const App = () => {

  return <>
    <RouterProvider router={router} />
  </>
}