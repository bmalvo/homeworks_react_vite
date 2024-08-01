import { ThemeProvider } from "styled-components"
import { Button } from "./Button/Button"
import { ModuleSecondaryWrapper } from "./ModuleSecondaryWrapper/ModuleSecondaryWrapper"
import { ModuleWrapper } from "./ModuleWrapper/ModuleWrapper"
import { SecondaryWrapper } from "./SecondaryWrapper/SecondaryWrapper"
import { StyledWrapper } from "./StyledWrapper/StyledWrapper"
import { Wrapper } from "./Wrapper/Wrapper"
import { Elements } from "./Elements/Elements"

export const App = () => {

  const theme = {

    colors: {
      primary: '#0242e4',
      textLight: '#fee0fe'

    }
  }

  return <ThemeProvider theme={theme}>
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
    <StyledWrapper>
      Lorem ipsum dolor, sit amet consectetur adipisicing.
    </StyledWrapper>
    <Button />
    <Elements/>
  </ThemeProvider>
}