import { ModuleSecondaryWrapper } from "./ModuleSecondaryWrapper/ModuleSecondaryWrapper"
import { ModuleWrapper } from "./ModuleWrapper/ModuleWrapper"
import { SecondaryWrapper } from "./SecondaryWrapper/SecondaryWrapper"
import { Wrapper } from "./Wrapper/Wrapper"

export const App = () => {

  return <>
    <Wrapper>
      <h1>Lorem Ipsum</h1>
    </Wrapper>
    <SecondaryWrapper>
      <h1>Lorem Ipsum</h1>
    </SecondaryWrapper>
    <br></br>
    <ModuleWrapper>
      <h1>Lorem Ipsum</h1>
    </ModuleWrapper>
    <ModuleSecondaryWrapper>
      <h1>Lorem Ipsum</h1>
    </ModuleSecondaryWrapper>
  </>
}