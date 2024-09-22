import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Infos } from "./Infos"
import { MainLayout } from "./MainLayout";
import { infosLoader } from "./loaders/infosLoader";
import { AddInfo } from "./AddInfo";
import { addInfoAction } from "./actions/addInfo";
import { ErrorPage } from "./ErrorPage";
import { infoAction } from "./actions/infoAction";
import { EditInfo } from "./EditInfo";
import { infoLoader } from "./loaders/Info";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    action: infoAction,
    children: [

      {
        path: '',
        element: <Infos />,
        loader: infosLoader
      },
      {
        path: ':id',
        element: <EditInfo />,
        loader: infoLoader
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