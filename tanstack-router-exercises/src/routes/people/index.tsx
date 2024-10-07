import { createFileRoute, Link} from '@tanstack/react-router'
import { poepleLoader } from './-loaders';

type PeopleSearch = {

  page: number;
  size: number;
}

const People = () => {

  const { data, prev, next} = Route.useLoaderData();
  
  return <>
    <ul>
      {data.map(person => <li key={person.id}>{ person.name}</li>)}
    </ul>
    {next ? <Link to='.' search={prev => ({
      ...prev,
      page: (prev.page || 0) + 1
    })}> Next page</Link> : <span>You are on the last page</span>}
    {prev ? <Link to='.' search={prev => ({
      ...prev,
      page: (prev.page || 0) - 1
    })}> Previous page</Link> : <span>This is a very first page</span>}

    <h3>Items per page</h3>
    <div>
      <Link to='.' search={prev => ({
        ...prev,
        page: 1,
        size: 5
      })}>5</Link>
    </div>
    <div>
      <Link to='.' search={prev => ({
        ...prev,
        size: 10
      })}>10</Link>
    </div>
    <div>
      <Link to='.' search={prev => ({
        ...prev,
        size: 20
      })}>20</Link>
    </div>
  
  </>
  
}

export const Route = createFileRoute('/people/')({
  validateSearch: (search: Record<string, unknown>): PeopleSearch => ({

    page: Number(search?.page ?? 1),
    size: Number(search?.size ?? 10),
  }),
  loaderDeps: ({search }) => ({page: search.page, size: search.size}),
  loader: ({deps: {page, size}}) => poepleLoader(page, size),
  component: People,
})
