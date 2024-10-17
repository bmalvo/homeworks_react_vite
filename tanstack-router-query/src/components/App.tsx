import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUserData } from "../hooks/useUserData";

const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined!,
    isAuthorized: undefined!,
    unAuthRedirect: undefined!
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient();

export const App = () => {

  const { isAuthorized } = useUserData();

  return <>
    <QueryClientProvider client={queryClient}> 
    <RouterProvider
        router={router}
        context={{queryClient, isAuthorized, unAuthRedirect: '/unauth'}} />
        </QueryClientProvider>
        </>
}