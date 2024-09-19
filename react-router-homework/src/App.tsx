import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Infos } from "./Infos"
import { MainLayout } from "./MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [

      {
        path: '',
        element: <Infos />
    }
    ]
  }
]);

export const App = () => {

  return <RouterProvider router={router} />
}