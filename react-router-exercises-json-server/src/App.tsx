import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { Tasks } from "./Tasks";
import { tasksLoader } from "./loaders/tasks";
import { Task } from "./Task";
import { taskLoader } from "./loaders/task";
import { AddTask } from "./AddTask";
import { addTaskAction } from "./actions/addTask";

const router = createBrowserRouter([

  {
    element: <MainLayout />,
    children: [{

      path: '',
      element: <Tasks />,
      loader: tasksLoader

    },
      {
        path: 'create',
        element: <AddTask />,
        action: addTaskAction,
      },
    {
      path: ':id',
      element: <Task />,
      loader: taskLoader
    }]
  }
]);

export const App = () => {

  return <RouterProvider router={router} />
}