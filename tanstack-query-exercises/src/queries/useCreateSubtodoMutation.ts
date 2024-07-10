import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { SubTodo, SubTodoDto} from "../types";

export const useCreateSubtodoMutation = () => {

    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { data, mutate, error, isPending } = useMutation({
        mutationKey: ['subtodos'],
        mutationFn: async ( payload: SubTodoDto ) => {
            return apiPost<SubTodo, SubTodoDto>(`subtodos`, payload);
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