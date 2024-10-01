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

const PostNotFound = () => {

  return <>
    <div>
      <h1>Post not found!</h1>
    </div>
  </>
}

export const Route = createFileRoute('/_wrapper/posts')({
  component: Post,
  notFoundComponent: PostNotFound
})
