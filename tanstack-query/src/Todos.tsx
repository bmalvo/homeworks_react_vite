import { useQuery } from "@tanstack/react-query"

type Todo = {
    id: string;
    title: string;
}

export const Todos = () => {

    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/todos');

            return response.json() as Promise<Todo[]>; 
        }
     })

    if (!data) return null;
    
    return <ul>
        {data.map(element => <li key={element.id}>{ element.title}</li>)}
    </ul>
}