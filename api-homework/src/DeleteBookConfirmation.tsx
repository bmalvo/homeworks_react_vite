import { useDeleteBookMutation } from "./queries/useDeleteBookMutation";
import { BookEntity } from "./types";

type DeleteBookConfirmationProps = {

    book: BookEntity;
    onCancel: () => void
}

export const DeleteBookConfirmation = ({ onCancel, book }: DeleteBookConfirmationProps) => {
    
    const [mutate, isPending] = useDeleteBookMutation(book.id);

    if (isPending) return <p>Loading...</p>

    return (
        <div>
            <p>Do You really want to delete this one?<strong>{book.title}</strong></p>
            <button onClick={() => mutate}>delete</button>
            <button onClick={onCancel}>cancel</button>
        </div>
    )
}