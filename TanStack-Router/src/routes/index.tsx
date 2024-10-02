import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
  return <p>You have to choose one path from menu.</p>
}

export const Route = createFileRoute('/')({
  component: Index,
})
