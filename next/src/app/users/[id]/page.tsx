import { SingleUser } from "@/app/components/SingleUser";

type RouteProps = {

    params: Promise<{id: string}>
}

const User = async ({ params }: RouteProps) => {
    
    const { id } = await params;

    return (
        <SingleUser id={ Number(id)} />
    )
}

export default User;