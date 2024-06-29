import { useEffect } from "react";
import { useTodosDelete } from "./hooks/seTodosDelete";
import { Todo } from "./types";

type SingleTodoProps = {
    element: Todo;
    onTodoRemove: (id: string) => void;
}

export const SingleTodo = ({element, onTodoRemove}: SingleTodoProps) => {

    const { loading, error, deleteTodo, data } = useTodosDelete();

    const onDelete = () => {
        deleteTodo(element.id)
    }

    useEffect(() => {
        if (!data) return
        
        onTodoRemove(data.id);
    },[onTodoRemove, data])

    return (
        <li>
            <p>{element.title}</p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            {error && <p>{error}</p>}
        </li>
    )
}