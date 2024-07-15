import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateBookMutation } from "./queries/useCreateBookMutation";

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
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" value={value.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="year">Year</label><br />
                <input type="number" id="year" name="year" value={value.year} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description">Description</label><br />
                <textarea id="description" name="description" value={value.description} onChange={handleChange}/>
            </div>
            <button disabled={isPending} type="submit">Add book</button>
        </form>
    )
}