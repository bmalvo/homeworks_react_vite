import { Bar } from "./Bar"
import { Foo } from "./Foo"
import { GlobaStore } from "./GlobalStore"
import { MyIp } from "./MyIp"
import { Result } from "./Result"

export const App = () => {

  return <>
    <Foo />
    <Bar />
    <Result />
    <MyIp />
    <GlobaStore />
  </>
}