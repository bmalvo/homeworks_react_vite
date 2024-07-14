import { useQuery } from "@tanstack/react-query";
import { BookEntity } from "../types";

export const useGetBooksQuery = () => {

    const { data } = useQuery<BookEntity[]>({
        queryKey: ['books'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/books');
            return response.json();
        }
    })

    return { data }
}