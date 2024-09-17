import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {

    return <main>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Tasks</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </main>
}