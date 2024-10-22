import { SingleUser } from "../types"
import { User } from "./User";

export type UserListProps = {

    users: SingleUser[];
}

export const UserList = ({users}: UserListProps) => {

    return <>
        <ul>
            {users.map(user => <User user={user} key={user.id}/>)}
        </ul>
    </>
}