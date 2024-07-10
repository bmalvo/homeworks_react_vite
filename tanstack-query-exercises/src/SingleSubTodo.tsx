import { useDeleteSubtodoMutation } from "./queries/useDeleteSubtodoMutation";
import { SubTodo } from "./types"

type SingleSubTodoProps = {
    element: SubTodo;
}

export const SingleSubTodo = ({ element }: SingleSubTodoProps) => {

    const { mutate: deleteSubTodo } = useDeleteSubtodoMutation();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onDelete = () => {
        deleteSubTodo(element.id);
    }

        return (
            <li>
                <p>{element.title}</p>
                <button onClick={onDelete}>Delete subtodo</button>
            </li>
        )
    }