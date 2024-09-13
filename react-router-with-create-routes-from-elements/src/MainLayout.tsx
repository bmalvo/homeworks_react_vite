import { Link } from "react-router-dom"

export const MainLayout = () => {

    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to='account'> Account </Link>
                    </li>
                    <li>
                        <Link to='about'> About </Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}