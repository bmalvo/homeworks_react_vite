export type UserFirstNameProps = {

    name: string
}

export const UserFirstName = ({ name }: UserFirstNameProps) => {

    return <p>
        <strong>First name: { name }</strong>
    </p>
}