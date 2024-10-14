import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
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
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
    </div>
    </>
}

type RootContext = {


}

export const Route = createRootRouteWithContext<RootContext>()({
    component: RootComponent,
})