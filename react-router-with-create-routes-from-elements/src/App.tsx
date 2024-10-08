import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from "react-router-dom"
import { MainLayout } from "./MainLayout"
import { Account } from "./Account"
import { lazy, Suspense } from "react";
import { aboutLoader } from "./loaders/about";
import { Create } from "./Create";
import { AwaitedDate } from "./AwaitedData";
import { fakeLoader } from "./loaders/fakeLoader";
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
      path="create"
      element={<Create />}
      action={async ({ request }) => {
        const data = await request.formData();
        // console.log('handling action..', data.get('title'))

        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data.get('title'))
          },2000)
        })
        return null;
      }} />
    <Route
      path="awaited"
      element={<AwaitedDate />}
      loader={ fakeLoader} />
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