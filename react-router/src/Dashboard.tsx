import { User, useUser } from "./hooks/useUser";

export const Dashboard = () => {

    const {user} = useUser();

    return <div>

        <h1>Hello User!</h1>
        <span>You are {user?.name} with id: { user?.id}</span>

    </div>
}
