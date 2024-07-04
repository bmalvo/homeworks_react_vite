import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types";

export const useTodosCreateMutation = () => {

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['todos'],
        mutationFn: async (title: string) => {
            const res = await fetch(`http://localhost:3000/todos/`, {
                headers: {
                    'Content-Type': 'aplication/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    title
                })
            })
            return res.json();
        },
        onSuccess: (data) => {
            // queryClient.invalidateQueries({
            //     queryKey: ['todos']
            // })
            queryClient.setQueryData<Todo[]>(['todos'], oldData => {
                return [...(oldData || []), data]
            })
        }
    })
    return {
        mutate
    }
}