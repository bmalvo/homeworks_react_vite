import { Provider } from "react-redux"
import { MyIpAddress } from "./components/MyIpAddress"
import { store } from "./store"

export const App = () => {

  return (

    <Provider store={store}>
      <MyIpAddress />
    </Provider>
  )
}