import { useLoaderData } from "react-router-dom"
import { SingleInfo } from "./types";
import { Info } from "./Info";

export const Infos = () => {

    const infos = useLoaderData() as SingleInfo[];

    return <>
        <div>
            <h1>Infos</h1>
            <div className="grid-container">
                {infos.map(info => <Info key={info.id} info={info}/>)}
            </div>
        </div>
    </>
}