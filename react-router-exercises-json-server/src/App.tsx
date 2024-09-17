import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { Tasks } from "./Tasks";
import { tasksLoader } from "./loaders/tasks";

const router = createBrowserRouter([

  {
    element: <MainLayout />,
    children: [{

      path: '',
      element: <Tasks />,
      loader: tasksLoader

    }]
  }
]);

export const App = () => {

  return <RouterProvider router={router} />
}