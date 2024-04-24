import { FirstCounter } from "./FirstCounter"
import { SecondCounter } from "./SecondCounter"

export const IncorrectCounterParent = () => {
  return <h1><FirstCounter /> | <SecondCounter /></h1>
}
