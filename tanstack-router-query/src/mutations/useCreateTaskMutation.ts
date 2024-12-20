import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiCall } from "../utils/apiCall"
import { Task, TaskDto } from "../types"

export const useCreateTaskMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationKey: ['new-task'],
        mutationFn: async (body: TaskDto) => apiCall<Task, TaskDto>('tasks', {
            
            method: 'POST',
            body
        }),
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['tasks']
            })
        }
    })
}