import { Container } from "../../../components/Container";

type RouteProps = {

    params: Promise<{ slug: string, id: string }>;
}

const Post = async({ params }: RouteProps) => {
    
    const { slug, id} = await params;

    return (
        <Container>
            <h2>Read more about {slug} from data { id}!</h2>
        </Container>
    )
}

export default Post;