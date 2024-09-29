import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/posts/')({
  component: () => <div>Hello /posts/!</div>,
})
