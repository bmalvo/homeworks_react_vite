export const addTaskAction = async ({ request }: { request: Request }) => {
    
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');

    return fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        })
    })
}