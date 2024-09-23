import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const Root = () => {

    return <>
        <ul>
            <li>
                <Link to='/lorem'>Lorem</Link>
            </li>
            <li>
                <Link to='/dolor'>Dolor</Link>
            </li>
            <li>
                <Link to='/value/$value' params={{value: '123'}}>Value</Link>
            </li>
    </ul>
    <Outlet />
    </>
}

export const Route = createRootRoute({
  component: Root,
})
