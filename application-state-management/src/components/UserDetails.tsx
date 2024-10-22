import { SingleUser } from "../types";

export type UserDetailsProps = {

    user: SingleUser;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
    
    const { name, lastName, age} = user;

    return <p>
        <small>{name} {lastName} is { age} years old.</small>
    </p>
}