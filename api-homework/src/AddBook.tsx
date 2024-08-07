import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateBookMutation } from "./queries/useCreateBookMutation";
import { BookForm } from "./BookForm";

export const AddBook = () => {

    const { mutate, isPending } = useCreateBookMutation();

    const [value, setValues] = useState({
        title: 'book title',
        description: 'description',
        year: new Date().getFullYear()
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
            year: value.year
        })

        setValues({
            title: 'book title',
            description: 'description',
            year: new Date().getFullYear()
        })
    }

    return (
        <BookForm handleChange={ handleChange} handleSubmit={ handleSubmit} value={value } isPending={ isPending} />
    )
}