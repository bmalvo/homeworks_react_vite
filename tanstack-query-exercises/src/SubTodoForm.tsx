import { FormEvent, useState } from "react";
import { useSubTodoCreate } from "./hooks/useSubTodoCreate";

type SubTodoFormProps = {
    todoId: string;
}

export const SubTodoForm = ({todoId}: SubTodoFormProps) => {

    const { createSubTodo, error, loading} = useSubTodoCreate();

    const [value, setValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        createSubTodo(value, todoId);
        setValue('');
    }

    if(loading) return <p>Loading...</p>

    return <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={value} onChange={e => setValue(e.target.value)} />
        {error && <p>{error}</p>}
    </form>
}