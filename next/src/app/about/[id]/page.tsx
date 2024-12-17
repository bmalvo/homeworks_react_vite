import { Container } from "../../components/Container";

type RouteProps = {

    params: Promise<{ id: string }>;
}

const About = async({ params }: RouteProps) => {
    
    const { id} = await params;

    return (
        <Container>
            <h1>About something { id}!</h1>
        </Container>
    )
}

export default About;