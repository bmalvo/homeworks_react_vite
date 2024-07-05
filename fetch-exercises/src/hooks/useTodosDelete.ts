import { useState } from "react";
import { Todo } from "../types";
import { useApi } from "./useApi";

export const useTodosDelete = () => {

    const { error, loading, apiDelete } = useApi();
    const [data, setData] = useState<Todo>();

    const deleteTodo = async (id: string) => {
        const response = await apiDelete<Todo>(`todos/${id}`);

        if (response) setData(response);
    } 

    return {
        data, error, loading, deleteTodo
    }
}
