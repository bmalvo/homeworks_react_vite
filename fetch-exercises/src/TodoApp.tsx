
import { SingleTodo } from "./SingleTodo";
import { TodoForm } from "./TodoForm";
import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
    const { data, error, loading, removeTodo, addTodo} = useTodos();
    
    if (loading) return <p>Loading....</p>
    if (error) return <p>{ error }</p> 

    return <>
        <TodoForm onNewTodo={addTodo} />
        <ul>
            {data?.map(el => <SingleTodo key={el.id} onTodoRemove={ removeTodo } element={ el } />)}
        </ul>
    </>
}