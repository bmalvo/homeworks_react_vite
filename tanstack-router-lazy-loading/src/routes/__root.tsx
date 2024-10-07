import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootComponent = () => {

    return <>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
    <Outlet />        
    </div>
    </>
}

export const Route = createRootRoute({
    component: RootComponent,
})