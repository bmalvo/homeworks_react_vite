import { AccessValidator } from "./AccessValidator"
import { CounterOne } from "./CounterOne"

export const App = () => {
  return <>
    <CounterOne />
    <AccessValidator user={{name: 'Patryk', age:23, lastname:'Bobek'}}/>
  </>

}
