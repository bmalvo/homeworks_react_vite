import { User } from "@/db/users";


export const UsersList = async () => {

    const response = await fetch('http:localhost:3000/users/api');
    const users: User[] = await response.json();


    return <>
        <ul>
            {
                users.map(user => <li key={user.id}>{ user.name}</li>)
            }
        </ul>
    </>
}