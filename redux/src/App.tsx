import { Provider } from "react-redux"
import { Product } from "./components/Product"
import { store } from "./store"
import { Actions } from "./components/Actions"

export const App = () => {

  return (
    <Provider store={store}>
      <Product />
      <Actions />
    </Provider>
  )
}