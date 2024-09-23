import { createFileRoute, useParams } from '@tanstack/react-router'

const SinglePost = () => {

  const { postId} = Route.useParams();
  return (
    <h3>Post { postId}</h3>
  )
}

export const Route = createFileRoute('/posts/$postId')({
  component: SinglePost,
})
