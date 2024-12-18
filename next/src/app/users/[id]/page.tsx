type RouteProps = {

    params: Promise<{id: string}>
}

const User = async ({ params }: RouteProps) => {
    
    const { id } = await params;

    return <p>No User {id} info available</p>
}

export default User;