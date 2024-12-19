import postal from "postal";
import { useEffect, useState } from "react"

export const UserStatus = () => {

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {

        const subscription = postal.subscribe({

            channel: 'auth',
            topic: 'state',
            callback: (data: {isAuth: boolean}) => {

                setIsAuthorized(data.isAuth)
            }
        })

        return () => {

            subscription.unsubscribe();
        }
        
    },[])

    return (
        <p>{ isAuthorized ? 'just log in': 'not log in'}</p>
)
}