import { createFileRoute, Link} from '@tanstack/react-router'
import { poepleLoader } from './-loaders';

type PeopleSearch = {

  page: number
}

const People = () => {

  const { data, prev, next} = Route.useLoaderData();
  
  return <>
    <ul>
      {data.map(person => <li key={person.id}>{ person.name}</li>)}
    </ul>
    {next ? <Link to='.' search={prev => ({
      page: (prev.page || 0) + 1
    })}> Next page</Link> : <span>You are on the last page</span>}
    {prev ? <Link to='.' search={prev => ({
      page: (prev.page || 0) - 1
    })}> Previous page</Link> : <span>This is a very first page</span>}
  
  </>
  
}

export const Route = createFileRoute('/people/')({
  validateSearch: (search: Record<string, unknown>): PeopleSearch => ({

    page: Number(search?.page ?? 1)
  }),
  loaderDeps: ({search }) => ({page: search.page}),
  loader: ({deps: {page}}) => poepleLoader(page),
  component: People,
})
