import { Address } from "./Address"
import { CursorPosition } from "./CursorPosition"
import { RandomNumbersGenerator } from "./RandomNumbersGenerator"


const App = () => {
  return (
    <>
      <CursorPosition />
      <RandomNumbersGenerator />
      <Address />
    </>
  )
}

export { App }
