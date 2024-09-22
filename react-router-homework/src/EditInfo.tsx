import { Form, useLoaderData } from "react-router-dom"
import { useState } from "react";
import { SingleInfo } from "./types";

export const EditInfo = () => {

    const data = useLoaderData() as SingleInfo;
    const [title, setTitle] = useState(data.title);


    return <>
        <div>
            <h1>Change info title</h1>
            <Form method="PUT" action="/">
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="hidden" name="id" value={data.id}/>
                <button type="submit">update info</button>
            </Form>
        </div>
    </>
}