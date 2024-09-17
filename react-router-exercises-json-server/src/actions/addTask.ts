import { SingleTaskDto } from "../types/task";
import { apicall } from "../utils/apicall";

export const addTaskAction = async ({ request }: { request: Request }) => {
    
    const formData = await request.formData();
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();

    return apicall<SingleTaskDto>('tasks', {
        method: 'POST',
        body: {
            title: title || '',
            description: description || ''
        }
    })
}