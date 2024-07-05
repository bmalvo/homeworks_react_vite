
import { useGetTodosQuery } from "./queries/useGetTodosQuery";
import { SingleTodo } from "./SingleTodo";
import { TodoForm } from "./TodoForm";
import { TopTodos } from "./TopTodos";

export const TodoApp = () => {
    const { data, error, isLoading} = useGetTodosQuery();
    
    if (isLoading) return <p>Loading....</p>
    if (error) return <p>{ error.message }</p> 

    return <>
        <TopTodos />
        <TopTodos />
        <TopTodos />
        <TopTodos />
        <TodoForm />
        <ul>
            {data?.map(el => <SingleTodo key={el.id} element={ el } />)}
        </ul>
    </>
}