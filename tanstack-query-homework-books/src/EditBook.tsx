import { ChangeEvent, FormEvent, useState } from "react";
import { BookEntity } from "./types"
import { useUpdateBookMutation } from "./queries/useUpdataBookMutation";
import { BookForm } from "./BookForm";

type EditBookProps = {

    book: BookEntity
}

export const EditBook = ({book}: EditBookProps) => {

    const { mutate, isPending } = useUpdateBookMutation(book.id);

    const [value, setValues] = useState({
        title: book.title,
        description: book.description,
        year: book.year
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value, type } = e.target;

        setValues(prevValues => ({
            ...prevValues,
            [name] : type === 'number' ? Number(value) : value
        }))
    } 

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        mutate({
            title: value.title,
            description: value.description,
            year: value.year,
        })

    }

    return (
        <BookForm handleChange={ handleChange} handleSubmit={ handleSubmit} value={value } isPending={ isPending} />
    )
}