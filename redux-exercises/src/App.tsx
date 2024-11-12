import { Provider } from "react-redux"
import { TodoList } from "./components/TodoList"
import { store } from "./store"
import { TodoForm } from "./components/TodoForm"

export const App = () => {

  return <>
    <Provider store={store} >
      <TodoForm />
      <TodoList />
    </Provider>
  </>
}