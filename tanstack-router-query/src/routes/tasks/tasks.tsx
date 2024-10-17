import { createFileRoute, Link } from '@tanstack/react-router'
import { taskOptions } from '../../queries/tasks'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useDeleteTaskMutation } from '../../mutations/useDeleteTaskMutation'

const Tasks = () => {
  const { data } = useSuspenseQuery(taskOptions)

  const { mutate, isPending } = useDeleteTaskMutation()

  const handleDelete = (id: string) => {
    mutate(id)
  }

  if (isPending) return <p>loading...</p>

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <Link to="/tasks/$id" params={{ id: task.id }}>
              Details{' '}
            </Link>
            <Link to="/tasks/edit/$id" params={{ id: task.id }}>
              Edit{' '}
            </Link>
            <button onClick={() => handleDelete(task.id)}>Destroy</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Route = createFileRoute('/tasks/tasks')({
  component: Tasks,
  loader: ({ context }) => {
    const { queryClient } = context
    return queryClient.ensureQueryData(taskOptions)
  },
})
