import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Button } from "./Button"
import { Text } from "./Text"
import { Wrapper } from "./Wrapper"
import { Foo } from "./Foo"
import { Bar } from "./Bar"

const GlobalStyle = createGlobalStyle`
    
  body {
    background-color: ${props => props.theme.colors.background}
    }
  `

export const App = () => {

  // Exercise 1:
  // const light = {

  //   colors: {
  //     primary: '#0333ee',
  //     textPrimary: '#fff',
  //     background: '#eee',
  //     textBackground: '#333'
  //   }
  // }

  // return <ThemeProvider theme={light}>
  //   <GlobalStyle/>
  //   <Wrapper>
  //   <Button label='super button' />
  //   <Text>Lorem ipsum dolor sit amet consectetur.</Text>
  //   </Wrapper>
  // </ThemeProvider>

  // Exercise 2: 
  return <>
    <Foo /><br />
    <Bar />
  </>
}