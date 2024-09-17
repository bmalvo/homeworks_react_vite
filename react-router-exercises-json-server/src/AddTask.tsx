import { Form, useActionData } from "react-router-dom"
import { SingleTask } from "./types/task"

export const AddTask = () => {

    const data = useActionData() as SingleTask | null;

    return <div>
        <h1>Create new task</h1>
        <Form method="POST">
            <input type="text" name="title" />
            <textarea name="description" id=""></textarea>
            <button type="submit">add task</button>
        </Form>
        {data ? <p>Task "{ data.title}" has been properly added</p> : '🍌'}
    </div>
}