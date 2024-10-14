import { createFileRoute } from "@tanstack/react-router"
import { taskOptions } from "../queries/tasks";
import { useSuspenseQuery } from "@tanstack/react-query";

const Tasks = () => {

    const { data } = useSuspenseQuery(taskOptions);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {data.map(task => <li key={task.id}><h2>{task.title}</h2> <p>{ task.description}</p></li>)}
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