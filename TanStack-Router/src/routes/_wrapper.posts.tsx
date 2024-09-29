import { createFileRoute, Outlet } from '@tanstack/react-router'

const Post = () => {
  return (
    <>
      <h2>Posts</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Outlet />
    </>
  )
}

export const Route = createFileRoute('/_wrapper/posts')({
  component: Post,
})
