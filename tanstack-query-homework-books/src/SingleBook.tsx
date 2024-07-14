import { BookEntity } from "./types";

type SingleBookProps = {

    book: BookEntity;
}

export const SingleBook = ({ book }: SingleBookProps) => {

    return (
        <li key={book.id}>
            <h2><strong>{book.title} <sub><small>{book.year}</small></sub></strong></h2>
            <p>{book.description}</p>
            <br></br>
        </li>
    )
}