import { useGetBooksQuery } from "./queries/useGetBooksQuery"
import { BookEntity } from "./types";

export const Books = () => {

    const { data } = useGetBooksQuery();

    if(!data) return <p>Loading...</p>

    return <ul>
        {data.map((book: BookEntity) => <li key={book.id}>{book.title}</li>)}
    </ul>
}