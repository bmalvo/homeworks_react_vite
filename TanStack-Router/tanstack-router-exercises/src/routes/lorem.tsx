import { createFileRoute } from '@tanstack/react-router'

const Lorem = () => {

  return <p>Lorem ipsum dolor sit.</p>
}

export const Route = createFileRoute('/lorem')({
  component: Lorem,
})
