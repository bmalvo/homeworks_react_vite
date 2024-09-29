import { createFileRoute, Outlet } from '@tanstack/react-router'

const Wrapper = () => {

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
