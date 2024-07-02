import { useState } from "react";
import { SubTodo, SubTodoDto } from "../types";
import { useApi } from "./useApi";

export const useSubTodoCreate = () => {

    const { error, loading, apiPost } = useApi();
    const [data, setData] = useState<SubTodo>();

    const createSubTodo = async (title: string, todoId: string) => {
        const response = await apiPost<SubTodo, SubTodoDto>(`subtodos`, { title, todoId });

        if (response) setData(response);
    } 

    return {
        data, error, loading, createSubTodo
    }
}