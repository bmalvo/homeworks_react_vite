import { useQuery } from "@tanstack/react-query";

export const useGetBooksQuery = () => {

    const { data } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/books');
            return response.json();
        }
    })

    return { data }
}