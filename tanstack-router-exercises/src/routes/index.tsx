import { createFileRoute } from '@tanstack/react-router'

const Home = () => {

  return <>
    <h2>You are in home page</h2>
    <p>select from list Your next destination</p>
  </>
}

export const Route = createFileRoute('/')({
  component: Home,
})
