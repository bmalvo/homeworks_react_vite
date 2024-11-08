import { useGetAllTodosQuery } from "../slices/todosApiSlice"
import { SingleTodo } from "./SingleTodo";

export const TodoList = () => {

    const { data, isLoading } = useGetAllTodosQuery();
    
    if (isLoading) return <p>Loading todos...</p>
    
    if (!data) return <p>Todos not available</p>

    
    return (

        <ul>
            {data.map(todo => <SingleTodo key={todo.id} todo={ todo} />)}
        </ul>
        
    )
}