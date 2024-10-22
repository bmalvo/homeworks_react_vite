import { SingleUser } from "../types"
import { UserFirstName } from "./UserFirstName"
import { UserLastName } from "./UserLastName"

export type UserMainDataProps = {

    user: SingleUser;
}

export const UserMainData = ({ user }: UserMainDataProps) => {

    const { name, lastName } = user;

    return <div>
        <UserFirstName name={name} />
        <UserLastName lastname={ lastName} />
    </div>
}