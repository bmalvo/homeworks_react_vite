import { Link, useSubmit } from "react-router-dom";
import { SingleInfo } from "./types"

type InfoProps = {

    info: SingleInfo;
}
export const Info = ({info}: InfoProps) => {

    const submit = useSubmit();

    const handleDelete = () => {

        submit({
            id: info.id
        }, {
            method: 'DELETE',
            action: '/'
        })
    }

    return <>
        <div className="grid-item">
            <h2>{info.title}</h2>
            <button onClick={handleDelete}>Delete</button>
            <button><Link to={info.id}>Edit</Link></button>
        </div>
    </>
}