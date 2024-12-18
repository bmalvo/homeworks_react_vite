import { User } from "@/db/users";
import { revalidatePath } from "next/cache";


export const UsersList = async () => {

    const response = await fetch('http:localhost:3000/users/api');
    const users: User[] = await response.json();

    const addUsers = async(formData: FormData) => {
        'use server'
        const name = formData.get('name');
        if (!name) return;

        const response = await fetch('http://localhost:3000/users/users/api', {

            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const newUser = await response.json();
        revalidatePath('/users');
    }

    return <>
        <div>
            <form action={addUsers}>
                <input type="text" name="name" />
                <button type="submit">add new user </button>
            </form>
        </div>
        <ul>
            {
                users.map(user => <li key={user.id}>{ user.name}</li>)
            } 
        </ul>
    </>
}