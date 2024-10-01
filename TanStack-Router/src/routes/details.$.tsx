import { createFileRoute } from '@tanstack/react-router'

const WrongPlace = () => {
  const { _splat } = Route.useParams()

  return (
    <div>
      <h1>This is a wrong place! You have to go back!</h1>
      <p>There is no such place: {_splat}</p>
    </div>
  )
}

export const Route = createFileRoute('/details/$')({
  component: WrongPlace,
})
