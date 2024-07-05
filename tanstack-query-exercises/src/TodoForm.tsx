import { FormEvent, useState } from "react";
import { useTodosCreate } from "./hooks/useTodosCreate";




export const TodoForm = () => {

    const { createTodo, error, loading, data} = useTodosCreate();

    const [value, setValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        createTodo(value);
        setValue('');
    }

    if(loading) return <p>Loading...</p>

    return <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={value} onChange={e => setValue(e.target.value)} />
        {error && <p>{error}</p>}
    </form>
}