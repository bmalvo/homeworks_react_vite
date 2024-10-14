import { getRouteApi } from "@tanstack/react-router";

const ipRoute = getRouteApi('/ip');

export const IP = () => {

    const { ip } = ipRoute.useLoaderData();
    const { allowed } = ipRoute.useRouteContext();

    return <h2>{ ip }- { allowed ? 'You have an acces' : 'forbidden'}</h2>
}
