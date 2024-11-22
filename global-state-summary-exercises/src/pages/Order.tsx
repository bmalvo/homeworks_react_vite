import { FormEvent } from "react";
import { PageHeader } from "../components/PageHeader"
import { useInput } from "../hooks/useInput"

export const Order = () => {

    const titleInput = useInput('');
    const descriptionInput = useInput('');

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        
    }

    return <>
        <PageHeader>Order</PageHeader>
        <p>Please fill out Your order configuration.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="title" placeholder="title" { ...titleInput } />
            </div>
            <div>
            <textarea name="" id="" placeholder="configuration" { ...descriptionInput }></textarea>
            </div>
            <button type="submit" disabled={ !titleInput.value || !descriptionInput.value}>Procced to next step</button>
        </form>
    </>
}