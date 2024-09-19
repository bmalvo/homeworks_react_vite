import { Form } from "react-router-dom"

export const AddInfo = () => {

    return <>
        <div>
            <h1>Create ne info</h1>
            <Form method="POST">
                <input type="text" name="title" />
                <button type="submit">add info</button>
            </Form>
        </div>
    </>
}