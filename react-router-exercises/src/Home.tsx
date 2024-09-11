import { Link, Outlet } from "react-router-dom"

export const Home = () => {

    return <main>
        <nav>
            <ul>
                <li>
                    <Link to='pokemon/pikachu'>Pikachu</Link>
                </li>
                <li>
                    <Link to='pokemon/charizard'>Charizard</Link>
                </li>
                <li>
                    <Link to='pokemon/cubone'>Cubone</Link>
                </li>
                <li>
                    <Link to='pokemon/zidane'>Incorect name</Link>
                </li>
            </ul>
        </nav>
        <section>
            <Outlet />
        </section>
    </main>
}