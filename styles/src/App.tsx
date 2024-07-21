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
  </>
}