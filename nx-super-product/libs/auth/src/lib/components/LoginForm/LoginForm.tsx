import { useAuth } from "../../hooks/useAuth"

export const LoginForm = () => {

    useAuth();

    return (
        <form action="">
            <input type="text" name="login"/>
            <input type="password" name="password" />
            <button type="submit">Log in</button>
        </form>
    )
}