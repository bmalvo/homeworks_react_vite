import { useEffect, useMemo, useState } from "react";
import { useApi } from "./useApi";

type SingleUser = {

    id: string;
    name: string;
    age: number;
}

export const useUsers = () => {

    const { get } = useApi();
    const [users, setUsers] = useState<SingleUser[]>([]);

    const adults = useMemo(() => {

        return users.filter(user => user.age >= 18)
    }, [users]);

    const getUsers = async () => {
        
        const newUsers = await get<SingleUser[]>('users');
        setUsers(newUsers);
    }

    useEffect(() => {

        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return {
        users,
        adults
    }
};