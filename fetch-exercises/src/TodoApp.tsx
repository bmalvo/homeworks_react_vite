
import { SingleTodo } from "./SingleTodo";
import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
    const { data, error, loading, removeTodo} = useTodos();
    
    if (loading) return <p>Loading....</p>
    if (error) return <p>{ error }</p> 

    return (
        <ul>
            {data?.map(el => <SingleTodo key={el.id} onTodoRemove={ removeTodo } element={ el } />)}
        </ul>
    )
}