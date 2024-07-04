import { useGetTodosQuery } from "./hooks/useGetTodosQuery";
import { useGetSubTodosQuery } from "./hooks/useGetSubTodosQuery";
import { useTodosCreate } from "./hooks/useTodosCreate";
import { FormEvent, useState } from "react";

export const Todos = () => {

    const [value, setValue] = useState('');

    const { createTodo} = useTodosCreate();

    const { data, refetch } = useGetTodosQuery();

    const firstTodoId = data ? data[data.length -1].id : ''; 

    const { data: subtodos } = useGetSubTodosQuery(firstTodoId);
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        createTodo(value)
        
    }

    if (!data || !subtodos) return null;
    
    return <div>
        <form action="" onSubmit={onSubmit}>
            <input type="title" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
        <button onClick={() => refetch()}>Refresh todos</button>
        <ul>
            {data.map(element => <li key={element.id}>{ element.title}</li>)}
        </ul>
        <hr></hr>
        <ul>
            {subtodos.map(element => <li key={element.id}>{ element.title}</li>)}
        </ul>
    </div>
}