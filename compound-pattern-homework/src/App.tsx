import { LigthBulb } from "./components/LightBulb"

export const App = () => {

  return <>
    <LigthBulb >
      <LigthBulb.on>Light is on</LigthBulb.on>
      <LigthBulb.switch />
      <LigthBulb.off>Light is off</LigthBulb.off>
    </LigthBulb>
  </>
}