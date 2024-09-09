import { useLoaderData } from "react-router-dom"

type IpResponse = {

    ip: string;
}

export const MyIp = () => {

    const data = useLoaderData() as IpResponse;

    console.log('ip: ', data)

    return <h1>IP: { data.ip}</h1>;
}