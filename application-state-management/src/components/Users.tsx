import { useUsers } from "../hooks/useUsers"

export const Users = () => {

    const { getUsers } = useUsers;

    const users = getUsers();
}