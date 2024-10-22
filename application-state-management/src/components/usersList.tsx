import { UserContext } from "../context/UserContext";
import { SingleUser } from "../types"
import { User } from "./User";

export type UserListProps = {

    users: SingleUser[];
}

export const UserList = ({users}: UserListProps) => {

    return <>
        <ul>
            {users.map(user => (
                <UserContext.Provider value={{user}} key={user.id}>
                    <User/>
                </UserContext.Provider>
                ))}
                
        </ul>
    </>
}