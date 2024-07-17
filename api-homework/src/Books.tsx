import { AddBook } from "./AddBook";
import { useGetBooksQuery } from "./queries/useGetBooksQuery"
import { SingleBook } from "./SingleBook";

export const Books = () => {

    const { data, isFetching } = useGetBooksQuery();

    if (isFetching) return <p>Loading...</p>
    
    if(!data) return <p>No data...</p>

    return <div>
        <AddBook />
        <h1>Books</h1>
        <ul>
            {data.map(book => <SingleBook book={book} key={book.id}/>)}
        </ul>
        </div>
}