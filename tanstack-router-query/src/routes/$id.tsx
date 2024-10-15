import { createFileRoute } from '@tanstack/react-router'
import { oneTaskOptions } from '../queries/task';
import { useSuspenseQuery } from '@tanstack/react-query';

const SingleTask = () => {

  const { id } = Route.useParams();
  const { data } = useSuspenseQuery(oneTaskOptions(id));

  return <>
    <div>
      <h1>{ data.title}</h1>
      <p>{ data.description}</p>
    </div>
  </>
}

export const Route = createFileRoute('/$id')({
  component: SingleTask,
  loader: ({ context, params }) => {
    
    const { queryClient } = context;
    const { id } = params;

    return queryClient.ensureQueryData(oneTaskOptions(id));
  }
})
