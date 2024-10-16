import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiCall } from "../utils/apiCall"
import { Task, TaskDto } from "../types"

export const useUpdateTaskMutation = (id: string) => {

    const queryClient = useQueryClient();


    return useMutation({

        mutationKey: ['update-task', id],
        mutationFn: async (body: TaskDto) => apiCall<Task, TaskDto>(`tasks/${id}`, {
            
            method: 'PUT',
            body
        }),
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['tasks']
            })
        }
    })
}