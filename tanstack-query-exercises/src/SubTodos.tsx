import { SingleSubTodo } from "./SingleSubTodo";
import { SubTodoForm } from "./SubTodoForm";
import { useGetSubtodosQuery } from "./queries/useGetSubtodosQuery";

type SubTodosProps = {
    todoId: string;
}

export const SubTodos = ({todoId}: SubTodosProps) => {
    
    const { data, error, isLoading} = useGetSubtodosQuery(todoId);

    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>Loading subtodos...</p>
    if (!data) return;


    return (
        <>
            <SubTodoForm todoId={ todoId }/>
            <ul>
                {data.map(subtodo => <SingleSubTodo key={subtodo.id} element={subtodo}/>)}
            </ul>
        </>
    )
}