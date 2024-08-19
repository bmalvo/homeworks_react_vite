import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Button } from "./Button"
import { Text } from "./Text"
import { Wrapper } from "./Wrapper"
import { useState } from "react"
// import { Foo } from "./Foo"
// import { Bar } from "./Bar"

const GlobalStyle = createGlobalStyle`
    
  body {
    background-color: ${props => props.theme.colors.background}
    }
  `

export const App = () => {

  // Exercise 1:

  const [isLight, setLight] = useState(true);

  const light = {

    colors: {
      primary: '#0333ee',
      textPrimary: '#fff',
      background: '#eee',
      textBackground: '#333'
    }
  }

  const dark = {

    colors: {
      primary: '#9ca5df',
      textPrimary: '#222',
      background: '#333',
      textBackground: '#eee'
    }
  }

  const toggleTheme = () => {

    setLight(prevLight => !prevLight);
  }

  return <ThemeProvider theme={isLight ? light : dark}>
    <GlobalStyle/>
    <Wrapper>
    <Button label='shift Theme' onClick={toggleTheme}/>
    <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </Wrapper>
  </ThemeProvider>

  // Exercise 2: 
  // return <>
  //   <Foo /><br />
  //   <Bar />
  // </>
}