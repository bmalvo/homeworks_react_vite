import { useMutation } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"

export const useDeleteTodoMutation = () => {

    const { apiDelete } = useApi();
    const { data, mutate, error, isPending } = useMutation({
        mutationKey: ['todos'],
        mutationFn: async(todoId: string) => {
            return apiDelete(`todos/${todoId}`)
        }
    })

    return {
        data,
        mutate,
        error,
        isPending
    }
}