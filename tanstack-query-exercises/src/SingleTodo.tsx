import { useState } from "react";
import { useTodosDelete } from "./hooks/useTodosDelete";
import { Todo } from "./types";
import { SubTodos } from "./SubTodos";

type SingleTodoProps = {
    element: Todo;
}

export const SingleTodo = ({element}: SingleTodoProps) => {

    const { loading, error, deleteTodo} = useTodosDelete();
    const [showTodos, setShowTodos] = useState(false);

    const onDelete = () => {
        deleteTodo(element.id)
    }

    const toggleSubTodos = () => {
        setShowTodos(prevShowTodos => !prevShowTodos);
    }


    return (
        <li>
            <p>{element.title}</p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            <button disabled={loading} onClick={toggleSubTodos}>Show details</button>
            {showTodos && <SubTodos todoId={element.id} />}
            {error && <p>{error}</p>}
        </li>
    )
}