import { useLoaderData } from "react-router-dom"
import { SingleInfo } from "./types";

export const Infos = () => {

    const infos = useLoaderData() as SingleInfo[];

    return <>
        <div>
            <h1>Infos</h1>
            <div className="grid-temple">
                {infos.map(info => <div key={info.id} className="grid-item">{ info.title}</div>)}
            </div>
        </div>
    </>
}