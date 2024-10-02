import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import {Route as postsRoute} from './_wrapper/posts'
import React, { Suspense } from 'react';

const TanstackRouterDevtools = import.meta.env.DEV ?
    React.lazy(() => import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
    })))
    : () => null;

const RootComponent = () => {

    
    return <>
    <div>
        <h1>MyApp</h1>
        <nav>
            <ul>
                <li>
                    <Link to='..'>Home</Link>
                </li>
                <li>
                    <Link to='/data'>Data</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/posts/new'>New post</Link>
                </li>
                <li>
                        <Link to='/posts/details/$postId' params={{postId: '1234F'}}>Post 1234F</Link>
                </li>
                <li>
                    <Link to={postsRoute.fullPath}>Posts</Link>
                </li>
            </ul>
        </nav>
            <Outlet />
            <Suspense>
            <TanstackRouterDevtools />
            </Suspense>
    </div>
    </>
}


export const Route = createRootRoute({
    component: RootComponent,
})