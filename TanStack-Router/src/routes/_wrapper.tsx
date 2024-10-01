import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

let isLogged = false;

const Wrapper = () => {

  if(!isLogged) return <Navigate to='/' />

  return <>
    <main>
      <strong>Hello! I am a wrapper!</strong>
      <Outlet />
    </main>
  </>
}

export const Route = createFileRoute('/_wrapper')({
  component: Wrapper,
})
