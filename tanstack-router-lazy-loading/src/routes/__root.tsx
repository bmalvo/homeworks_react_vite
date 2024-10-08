import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

const RootComponent = () => {

    return <>
        <div>
            <h1>My app</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/ip'>my ip</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
    </div>
    </>
}

export const Route = createRootRoute({
    component: RootComponent,
})