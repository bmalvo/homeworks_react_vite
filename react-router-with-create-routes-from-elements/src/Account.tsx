import { useEffect } from "react";
import { Form, useFetcher, useSubmit } from "react-router-dom"

export const Account = () => {

    const submit = useSubmit();

    const fetcher = useFetcher();

    const handleSubmit = () => {

        submit({
            title: 'stefka'

        }, {
            action: '/create',
            method: 'post'
        })
    }

    useEffect(() => {
        const data = fetcher.data;

        if (!data) return;
        console.log('DATA', fetcher.data);
    }, [fetcher])
    
    useEffect(() => {

        fetcher.load('/about')
    }, [])

    console.log(fetcher);

    return <>
        <h1>Account</h1>
        <Form method="post" action="/create">
            <input type="text" name="title" />
            <button type="submit">Create</button>
        </Form>
        <fetcher.Form method="post" action="/create">
            <input type="text" name="title" />
            <button type="submit">Create by fetcher</button>
        </fetcher.Form>
        <button type="button" onClick={handleSubmit}>Submit with useSubmit</button>
    </>
}