import { Link, Navigate, Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import {Route as postsRoute} from './posts'
import { useEffect } from 'react'


const RootComponent = () => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate({to: '/posts'})
    // }, [])

    // const random = Math.random()

    // console.log(random)
    
    // if (random > 0.5) {
        
    //     return <Navigate to='/posts'/>
    // }
    
    return <>
    <div>
        <h1>MyApp</h1>
        <nav>
            <ul>
                <li>
                    <Link to='..'>Home</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to={postsRoute.fullPath}>Posts</Link>
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