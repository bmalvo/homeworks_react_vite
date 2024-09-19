import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {

    return <>
        <main>
            <nav>
                <div className="grid-container">
                    <div className="grid-item"><Link to='/'>Infos</Link></div>
                    <div className="grid-item"><Link to='/add'>Add Info</Link></div>
                </div>
            </nav>
            <Outlet />    
        </main>
    </>
}