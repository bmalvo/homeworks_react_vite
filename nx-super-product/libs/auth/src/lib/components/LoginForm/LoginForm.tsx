import { FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth"
import postal from 'postal';

export const LoginForm = () => {

    useAuth();

    const handleSubmit = (e: FormEvent)=>  {

        e.preventDefault();

        postal.publish({

            channel: 'auth',
            topic: 'state',
            data: {

                isAuth: true
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login"/>
            <input type="password" name="password" />
            <button type="submit">Log in</button>
        </form>
    )
}