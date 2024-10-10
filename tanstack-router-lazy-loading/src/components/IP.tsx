import { getRouteApi } from "@tanstack/react-router";

const ipRoute = getRouteApi('/ip');

export const IP = () => {

    const { ip } = ipRoute.useLoaderData();

    return <h2>{ ip }</h2>
}
