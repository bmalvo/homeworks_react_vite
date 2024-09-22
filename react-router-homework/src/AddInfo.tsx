import { Form, useActionData } from "react-router-dom"
import { SingleInfo } from "./types"
import { useEffect, useState } from "react";

export const AddInfo = () => {

    const data = useActionData() as SingleInfo | undefined;
    const [title, setTitle] = useState('new title');

    useEffect(() => {
        setTitle('new title');
    },[data])

    return <>
        <div>
            <h1>Create new info</h1>
            <Form method="POST">
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <button type="submit">add info</button>
            </Form>
            {data ? <p>info { data.title} has been added</p>: null}
        </div>
    </>
}