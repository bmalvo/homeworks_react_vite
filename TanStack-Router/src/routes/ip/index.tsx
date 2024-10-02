import { createFileRoute } from '@tanstack/react-router'
import { IpLoader } from './-loaders';

const MyIp = () => {

    const {ip} = Route.useLoaderData();
    return <>
        <h1>{ip}</h1>
    </>
}

const Loading = () => {

    return <div>
        <h1>Loading...</h1>
    </div>
}

const Error = () => {

    return <>
    <h2>Error ocur</h2>
    </>
}

export const Route = createFileRoute('/ip/')({
    loader: IpLoader,
    component: MyIp,
    pendingComponent: Loading,
    errorComponent: Error
})
