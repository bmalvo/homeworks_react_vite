import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Infos } from "./Infos"
import { MainLayout } from "./MainLayout";
import { infosLoader } from "./loaders/infosLoader";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [

      {
        path: '',
        element: <Infos />,
        loader: infosLoader
    }
    ]
  }
]);

export const App = () => {

  return <RouterProvider router={router} />
}