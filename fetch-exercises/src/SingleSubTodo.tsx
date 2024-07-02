import { useEffect } from "react";
import { useSubTodosDelete } from "./hooks/useSubTodoDelete";
import { SubTodo } from "./types"

type SingleSubTodoProps = {
    element: SubTodo;
    onDeleteCallback: () => void
}

export const SingleSubTodo = ({element, onDeleteCallback}: SingleSubTodoProps) => {

    const { deleteSubTodo, data } = useSubTodosDelete();

    const onDelete = () => {
        deleteSubTodo(element.id);
    }

    useEffect(() => {
        if (!data) return
        
        onDeleteCallback();

    },[data])

    return (
        <li>
            <p>{element.title}</p>
            <button onClick={onDelete}>Delete subtodo</button>
        </li>
    )
}