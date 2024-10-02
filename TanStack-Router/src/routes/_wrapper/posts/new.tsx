import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/posts/new')({
  component: () => <div>Hello /posts/new!</div>,
})
