import { useQuery } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi";
import { TodoWithSubTodos } from "../types";


export const useGetSubtodosQuery = (todoId: string) => {

    const {apiGet } = useApi();

    const { data, error, isLoading } = useQuery({
        queryKey: ['subtodos', todoId],
        queryFn: async () => {
            return apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`);
        }
    })
    
    return {
        data: data? data.subtodos : undefined,
        error,
        isLoading
    }
}