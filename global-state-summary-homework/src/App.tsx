import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'
import { Provider } from 'react-redux';
import { store } from './store';


const router = createRouter({routeTree});

declare module '@tanstack/react-router' {

  interface Register {

    router: typeof router
  }
}

export const App = () => {

  return <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
}