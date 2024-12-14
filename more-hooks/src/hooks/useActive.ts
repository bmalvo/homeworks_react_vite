import { useDebugValue, useEffect, useState } from "react"

export const useActive = () => {

    const [active, setActive] = useState(false);

    useDebugValue(active ? 'Active' : 'No Active');

    useEffect(() => {

        setTimeout(() => {

            setActive(prev => !prev)
        }, 3000)
    },[])

    return active;
}