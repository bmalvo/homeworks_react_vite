import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {

    return (
        <main>
            <nav>
                <div className="row">
                    <div className="item">
                        <Link to='account'> Account </Link>
                    </div>
                    <div className="item">
                        <Link to='about'> About </Link>
                    </div>
                    <div className="item">
                        <Link to='awaited'> Awaited Data </Link>
                    </div>
                </div>
            </nav>
            {/* <Suspense fallback={<h2>loading...</h2>}> */}
            <Outlet />
            {/* </Suspense> */}
        </main>
    )
}