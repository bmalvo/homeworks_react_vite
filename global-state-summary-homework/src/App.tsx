import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


const router = createRouter({routeTree});

declare module '@tanstack/react-router' {

  interface Register {

    router: typeof router
  }
}

export const App = () => {

  return <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </>
}