import { createFileRoute } from '@tanstack/react-router'

const Data = () => {

    const { value} = Route.useLoaderData();

    return (
        <h1>{ value}</h1>
    )
}

export const Route = createFileRoute('/data/')({

    loader: async () => {
        return new Promise<{value: string}>(resolve => {
            setTimeout(() => {
                resolve({
                    value: 'Value'
                })
            }, 5000)
        })
    },
    component: Data,
    pendingComponent: () => <p>Your data is coming...</p>
})
