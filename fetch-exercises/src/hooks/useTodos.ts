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

    useEffect(() => {
        getTodos();
    }, [])

    return {
        data, error, loading
    }
}
