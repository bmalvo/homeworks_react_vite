import { SingleUser } from "../types"
import { UserDetails } from "./UserDetails"
import { UserMainData } from "./UserMainData";


export type UserProps = {

    user: SingleUser;
}

export const User = ({user}: UserProps) => {

    return <>
        <li>
            <UserMainData user={ user} />
            <UserDetails user={user} />
        </li>
    </>
}