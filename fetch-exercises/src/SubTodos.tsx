import { SingleSubTodo } from "./SingleSubTodo";
import { SubTodoForm } from "./SubTodoForm";
import { useSubTodos } from "./hooks/useSubTodos";

type SubTodosProps = {
    todoId: string;
}

export const SubTodos = ({todoId}: SubTodosProps) => {
    
    const { data, error, loading, getSubTodos } = useSubTodos(todoId);

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading subtodos...</p>
    if (!data) return;


    return (
        <>
            <SubTodoForm todoId={ todoId } onNewSubTodoCallback={getSubTodos}/>
            <ul>
                {data.map(subtodo => <SingleSubTodo key={subtodo.id} element={subtodo} onDeleteCallback={ getSubTodos} />)}
            </ul>
        </>
    )
}