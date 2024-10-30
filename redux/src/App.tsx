import { Provider } from "react-redux"
import { Product } from "./components/Product"
import { store } from "./store"
import { Actions } from "./components/Actions"
import { Products } from "./components/Products"
import { IpAddress } from "./components/IpAddress"

export const App = () => {

  return (
    <Provider store={store}>
      <IpAddress />
      <Product />
      <Products />
      <Actions />
    </Provider>
  )
}