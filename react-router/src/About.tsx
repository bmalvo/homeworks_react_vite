import { Link, Outlet } from "react-router-dom"

export const About = () => {

    return <>
    <div>
        <h1>About</h1>
        <ul>
                <li>
                    <Link to='.' >About Us</Link>
                </li>
                <li>
                    <Link to='company' >Company</Link>
                </li>
        </ul>
        <Outlet />
    </div>   
    </>
}