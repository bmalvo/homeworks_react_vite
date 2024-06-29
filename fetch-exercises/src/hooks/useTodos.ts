import { useEffect, useState } from "react";
import { Todo } from "../types";
import { useApi } from "./useApi";

export const useTodos = () => {

    const { error, loading, apiGet } = useApi();
    const [data, setData] = useState<Todo[]>();

    const getTodos = async () => {
        const response = await apiGet<Todo[]>('todos');

        if (response) setData(response);
    } 

    const removeTodo = (id: string) => {
        setData(prevData => prevData?.filter(todo => todo.id !== id));
    }

    useEffect(() => {
        getTodos();
    }, [])

    return {
        data, error, loading, removeTodo
    }
}
