export type Task = {

    id: string;
    title: string;
    description: string;
}

export type TaskDto = Omit<Task, 'id'>