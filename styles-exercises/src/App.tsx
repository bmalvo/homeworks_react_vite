import { ThemeProvider } from "styled-components"
import { Button } from "./Button"
import { Text } from "./Text"
import { Wrapper } from "./Wrapper"

export const App = () => {

  const light = {

    colors: {
      primary: '#0333ee',
      textPrimary: '#fff',
      background: '#eee',
      textBackground: '#333'
    }
  }

  return <ThemeProvider theme={light}>
    <Wrapper>
    <Button label='super button' />
    <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </Wrapper>
  </ThemeProvider>
}