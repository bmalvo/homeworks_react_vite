import { useUserContext } from "../context/useUserContext";

export const UserDetails = () => {

    const { user } = useUserContext();
    if (!user) return null;
    const { name, lastName, age} = user;

    return <p>
        <small>{name} {lastName} is { age} years old.</small>
    </p>
}