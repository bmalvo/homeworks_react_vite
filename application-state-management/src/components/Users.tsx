import { useUsers } from "../hooks/useUsers"
import { UserList } from "./usersList";

export const Users = () => {

    const { getUsers } = useUsers();

    const users = getUsers();

    return <UserList users={users}/>
}