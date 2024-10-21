export type UserLastNameProps = {

    lastname: string;
}

export const UserLastName = ({ lastname }: UserLastNameProps) => {

    return <p>
        <strong>Last name: { lastname}</strong>
    </p>
}