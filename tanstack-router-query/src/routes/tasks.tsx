import { createFileRoute, Link } from "@tanstack/react-router"
import { taskOptions } from "../queries/tasks";
import { useSuspenseQuery } from "@tanstack/react-query";

const Tasks = () => {

    const { data } = useSuspenseQuery(taskOptions);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {data.map(task => <li key={task.id}>
                    <h2>{task.title}</h2>
                    <Link to='/$id' params={{ id: task.id }}>Details    </Link>
                    <Link to='/edit/$id' params={{ id: task.id}}>Edit   </Link>
                </li>)}
            </ul>
        </div>
    )
}

export const Route = createFileRoute('/tasks')({

    component: Tasks,
    loader: ({context}) => {
        const { queryClient } = context;
        return queryClient.ensureQueryData(taskOptions);
    }
})