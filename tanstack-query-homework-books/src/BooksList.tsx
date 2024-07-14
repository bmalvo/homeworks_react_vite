import { useGetBooksQuery } from "./queries/useGetBooksQuery"

export const BooksList = () => {

    const { data } = useGetBooksQuery();

    if(!data) return <p>Loading...</p>

    return <ul>
        {data.map(book => <li key={book.id}>{ book.title}</li>) }
    </ul>
}