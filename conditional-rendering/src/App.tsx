import { AgeVerifier } from "./AgeVerifier";
import { HelloSomebody } from "./HelloSomebody";
import { OperatorTest } from "./OperatorsTest";
import { SimpleAgeVerifier } from "./SimpleAgeVerifier";

export const App = () => {
  return <>
    <AgeVerifier age={18} />
    <HelloSomebody name="Brygida"/>
    <SimpleAgeVerifier age={19} />
    <OperatorTest />
  </>

}