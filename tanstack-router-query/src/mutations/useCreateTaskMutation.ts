import { useMutation } from "@tanstack/react-query"
import { apiCall } from "../utils/apiCall"
import { Task, TaskDto } from "../types"

export const useCreateTaskMutation = () => {

    return useMutation({

        mutationKey: ['new-task'],
        mutationFn: async (body: TaskDto) => apiCall<Task, TaskDto>('tasks', {
            
            method: 'POST',
            body
        })
    })
}