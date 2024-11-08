import { Todo } from "../types"

export type SingleTodoProps = {

    todo: Todo;
}

export const SingleTodo = ({ todo }: SingleTodoProps) => {

  return <>
    <li>
      {todo.title}
    </li>
  </>
}