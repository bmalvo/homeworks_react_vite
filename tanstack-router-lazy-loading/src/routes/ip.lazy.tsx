import { createLazyFileRoute } from '@tanstack/react-router'

const IP = () => {

    const { ip } = Route.useLoaderData();

    return <h2>{ ip }</h2>
}

export const Route = createLazyFileRoute('/ip')({
    component: IP,
    
})
