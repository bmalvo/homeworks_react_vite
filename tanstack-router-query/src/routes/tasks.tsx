import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks')({
  component: () => <Outlet />,
  beforeLoad: ({ context }) => {
    
    const { isAuthorized, unAuthRedirect} = context;
    if (!isAuthorized) throw redirect({to: unAuthRedirect})
  }
})
