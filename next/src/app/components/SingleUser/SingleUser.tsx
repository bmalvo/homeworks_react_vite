import { User } from "@/db/users";

type SingleUserProps = {

    id: number;
}

export const SingleUser = async ({ id }: SingleUserProps) => {
    
    try {
        const response = await fetch(`http://localhost:3000/users/${id}/api`);

        if (!response.ok) {
            return <p>User not found</p>
        }

        const user: User = await response.json();
        
        
        return <>
        <div>
            <p>{user.user.name} - {user.user.id}</p>
        </div>
    </>
    } catch (e) {

        throw e;
    }
    
}