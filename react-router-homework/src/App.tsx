import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Infos } from "./Infos"
import { MainLayout } from "./MainLayout";
import { infosLoader } from "./loaders/infosLoader";
import { AddInfo } from "./AddInfo";
import { addInfoAction } from "./actions/addInfo";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [

      {
        path: '',
        element: <Infos />,
        loader: infosLoader
      },
      {
        path: 'add',
        element: <AddInfo />,
        action: addInfoAction
      }
    ],
    errorElement: <ErrorPage />
  }

]);

export const App = () => {

  return <RouterProvider router={router} />
}