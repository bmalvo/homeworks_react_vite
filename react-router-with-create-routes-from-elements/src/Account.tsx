import { Form, useSubmit } from "react-router-dom"

export const Account = () => {

    const submit = useSubmit();

    const handleSubmit = () => {

        submit({
            title: 'stefka'

        }, {
            action: '/create',
            method: 'post'
        })
    }

    return <>
        <h1>Account</h1>
        <Form method="post" action="/create">
            <input type="text" name="title" />
            <button type="submit">Create</button>
        </Form>
        <button type="button" onClick={handleSubmit}>Submit with useSubmit</button>
    </>
}