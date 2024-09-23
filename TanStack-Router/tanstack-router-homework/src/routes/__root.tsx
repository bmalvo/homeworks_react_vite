import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const Root = () => {

  return <>
    <Link to='/color/$r/$g/$b' params={{r: '12', g:'12', b:'12'}}></Link>
    <Outlet />
    </>
}

export const Route = createRootRoute({
  component: Root,
})
