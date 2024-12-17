type RouteProps = {

    params: Promise<{ id: string }>;
}

const About = async({ params }: RouteProps) => {
    
    const { id} = await params;

    return (
            <h2>About something { id}!</h2>
    )
}

export default About;