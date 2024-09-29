import { createFileRoute } from '@tanstack/react-router'

const Index = () => {

  return <p>Select an option from menu</p>
}

export const Route = createFileRoute('/')({
  component: Index,
})
