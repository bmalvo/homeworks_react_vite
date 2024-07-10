import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { SubTodo} from "../types";

export const useDeleteSubtodoMutation = () => {

    const { apiDelete } = useApi();
    const queryClient = useQueryClient();

    const { data, mutate, error, isPending } = useMutation({
        mutationKey: ['subtodos'],
        mutationFn: async ( SubTodoId: string) => {
            return apiDelete<SubTodo>(`subtodos/${SubTodoId}`);
        },
        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ['subtodos']
            })
        }
    })

    return {
        data,
        mutate,
        error,
        isPending
    }
}