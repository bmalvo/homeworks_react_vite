import { useLoaderData } from "react-router-dom"
import { SingleTask } from "./types/task";

export const Tasks = () => {

    const data = useLoaderData() as SingleTask[];

    return <div>
        <h1>Tasks</h1>
        <div className="grid-container">
            {data.map(task => <div className="grid-item" key={task.id}> {task.title}</div>
            )}
        </div>
    </div>
}