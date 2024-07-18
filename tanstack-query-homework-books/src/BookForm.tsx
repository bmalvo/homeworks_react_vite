import { ChangeEvent, FormEvent } from "react"
import { BookDto } from "./types";

type BookForm = {

    handleSubmit: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isPending: boolean;
    value: BookDto;
}

export const BookForm = ({handleSubmit, handleChange, isPending, value}: BookForm) => {

    return(
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
                <button disabled={isPending} type="submit">Save</button>
            </form>
    )
}