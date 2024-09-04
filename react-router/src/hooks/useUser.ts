import { useEffect, useState } from "react";

export type User = {

    id: string;
    name: string;
}

export const useUser = (): {user: User | null, loading: boolean} => {

    const isAuthenticated = true;
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // const data = {

    //     id: 'abcd',
    //     name: 'marcin'
    // }

    useEffect(() => {

        setTimeout(() => {

            if (!isAuthenticated) setUser(null);
            else setUser({ name: 'marcin', id: '33' })
            setLoading(false);
        }, 2000)
    }, [])

    return {
        user,
        loading
    }
}