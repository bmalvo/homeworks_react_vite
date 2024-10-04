import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const RootComponent = () => {
    
    return <>
        <h1>People</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/people' search={{
                        page: 1
                    }}>People</Link>
                </li>
            </ul>
        </nav>
    <Outlet />
    </>
}

export const Route = createRootRoute({
    component: RootComponent,
})