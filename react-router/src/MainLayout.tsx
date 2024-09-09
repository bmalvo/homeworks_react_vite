import { Outlet, useNavigation } from "react-router-dom"
import { AppLink } from "./AppLink"

export const MainLayout = () => {

    const {state} = useNavigation();

    return <>
        <main>
            <header>
                <nav>
                    <ul>
                        <li>
                            <AppLink to='.'>Home</AppLink>
                        </li>
                        <li>
                            <AppLink to='about'>About</AppLink>
                        </li>
                        <li>
                            <AppLink to='product'>Product</AppLink>
                        </li>
                        <li>
                            <AppLink to='product/details'>Product details</AppLink>
                        </li>
                        <li>
                            <AppLink to='dashboard'>Dashboard</AppLink>
                        </li>
                        <li>
                            <AppLink to='path-with-loader'>Loader</AppLink>
                        </li>
                        <li>
                            <AppLink to='ip-address'>My IP</AppLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {state === 'loading' ? <p>data loading...</p> : <Outlet />}
        </main>
    </>
}