import { AgeVerifier } from "./AgeVerifier";
import { HelloSomebody } from "./HelloSomebody";

export const App = () => {
  return <>
    <AgeVerifier age={18} />
    <HelloSomebody />
  </>

}