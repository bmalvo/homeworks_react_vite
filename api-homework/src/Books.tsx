import { useGetBooksQuery } from "./queries/useGetBooksQuery"

export const Books = () => {

    const { data } = useGetBooksQuery();

    if(!data) return <p>Loading...</p>

    return <ul>
        {data.map((book: any) => <li key={book.id}>{book.title}</li>)}
    </ul>
}