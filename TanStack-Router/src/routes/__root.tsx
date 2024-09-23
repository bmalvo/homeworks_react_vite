import { Link, Outlet, createRootRoute } from '@tanstack/react-router'


const RootComponent = () => {
    
    return <>
    <div>
        <h1>MyApp</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/post'>Posts</Link>
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