import { useSubTodosDelete } from "./hooks/useSubTodoDelete";
import { SubTodo } from "./types"

type SingleSubTodoProps = {
    element: SubTodo;
}

export const SingleSubTodo = ({ element }: SingleSubTodoProps) => {

    const { deleteSubTodo } = useSubTodosDelete();

    const onDelete = () => {
        deleteSubTodo(element.id);

        return (
            <li>
                <p>{element.title}</p>
                <button onClick={onDelete}>Delete subtodo</button>
            </li>
        )
    }
}