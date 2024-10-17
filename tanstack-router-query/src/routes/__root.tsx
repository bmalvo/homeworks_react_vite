import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
import React from "react";
import { Suspense } from "react";

const TanStackRouterDevtools = import.meta.env.DEV ?
    React.lazy(() => import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
    })))
    : () => null;

const RootComponent = () => {

    return <>
        <div>
            <h1>My app</h1>
            <ul>
                <li>
                    <Link to="/ip">IP</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/tasks/new">add task</Link>
                </li>
            </ul>
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
    </div>
    </>
}

type RootContext = {

    queryClient: QueryClient,
    isAuthorized: boolean,
    unAuthRedirect: string
}

export const Route = createRootRouteWithContext<RootContext>()({
    component: RootComponent,
})