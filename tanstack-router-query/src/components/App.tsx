import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { useAccess } from "../hooks/useAccess";

const router = createRouter({
  routeTree,
  allowed: undefined!
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {

    const { allowed } = useAccess();

    return <RouterProvider
        router={router}
        context={{ allowed }} />
}