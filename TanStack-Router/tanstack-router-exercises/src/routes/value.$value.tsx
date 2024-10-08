import { createFileRoute } from '@tanstack/react-router'

const Value = () => {

  const { value } = Route.useParams();
  
  return <p>{ value}</p>
}

export const Route = createFileRoute('/value/$value')({
  component: Value,
})
