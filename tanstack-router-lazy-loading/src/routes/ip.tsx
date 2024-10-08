import { createFileRoute } from '@tanstack/react-router'

const IP = () => {

    const { ip } = Route.useLoaderData();

    return <h1>{ ip }</h1>
}

export const Route = createFileRoute('/ip')({
    component: IP,
    loader: async () => {
        const response = await fetch('https://api.ipify.org?format=json');
        return response.json() as Promise<{ ip: string }>
    }
})
