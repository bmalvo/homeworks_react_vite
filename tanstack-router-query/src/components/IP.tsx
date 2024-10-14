import { useSuspenseQuery } from "@tanstack/react-query";
import { ipQueryOptions } from "../queries/ipQuery";


export const IP = () => {

    const { data } = useSuspenseQuery(ipQueryOptions);

    return <h2>{ data.ip }</h2>
}
