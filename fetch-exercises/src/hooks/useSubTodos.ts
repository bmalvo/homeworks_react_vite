import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { SubTodo, TodoWithSubTodos } from "../types";

export const useSubTodos = (todoId: string) => {

    const { error, loading, apiGet } = useApi();
    const [data, setData] = useState<SubTodo[]>();
 
    const getSubTodos = async () => {
        const response = await apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`);

        if (response) setData(response.subtodos);
    } 

    useEffect(() => {
        getSubTodos();
    }, [])

    return {
        data, error, loading, getSubTodos
    }
}
