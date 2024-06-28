import { useTodos } from "./hooks/useTodos";
import { Todo } from "./types";

type SingleTodoProps = {
    element: Todo;
}

export const SingleTodo = ({element}: SingleTodoProps) => {

    useTodos();

    return (
        <li>
            <p>{element.title}</p>
             <button>Delete</button>
        </li>
    )
}