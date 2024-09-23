import { createFileRoute } from '@tanstack/react-router'

const Post = () => {
  return (
    <>
      <h2>Posts</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </>
  )
}

export const Route = createFileRoute('/posts')({
  component: Post,
})
