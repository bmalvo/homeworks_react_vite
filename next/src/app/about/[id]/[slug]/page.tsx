type RouteProps = {

    params: Promise<{ slug: string, id: string }>;
}

const Post = async({ params }: RouteProps) => {
    
    const { slug, id} = await params;

    return (
            <h3>Read more about {slug} from data { id}!</h3>
    )
}

export default Post;