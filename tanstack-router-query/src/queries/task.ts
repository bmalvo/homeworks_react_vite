import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "../utils/apiCall";
import { Task } from "../types";

export const oneTaskOptions = (id: string) => queryOptions({

    queryKey: ['tasks', id],
    queryFn: async () => {

        return apiCall<Task>(`tasks/${id}`)
    }
})