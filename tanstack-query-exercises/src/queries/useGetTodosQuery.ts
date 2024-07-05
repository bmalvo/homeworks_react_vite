import { useQuery } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi";
import { Todo } from "../types";


export const useGetTodosQuery = () => {

    const {apiGet } = useApi();

    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            return apiGet<Todo[]>('todos');
        }
    })
    
    return {
        data,
        error,
        isLoading
    }
}