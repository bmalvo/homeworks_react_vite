import { createFileRoute } from '@tanstack/react-router'

const SinglePost = () => {
  const { postId } = Route.useParams()
  return <h3>Post {postId}</h3>
}

export const Route = createFileRoute('/_wrapper/posts/$postId')({
  component: SinglePost,
})
