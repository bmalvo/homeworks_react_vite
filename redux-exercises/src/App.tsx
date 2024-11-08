import { Provider } from "react-redux"
import { TodoList } from "./components/TodoList"
import { store } from "./store"

export const App = () => {

  return <>
    <Provider store={store} >
      <TodoList />
    </Provider>
  </>
}