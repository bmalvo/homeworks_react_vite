import { createFileRoute } from '@tanstack/react-router'

const Index = () => {

  return <p>home page</p>
}

export const Route = createFileRoute('/')({
  component: Index,
})
