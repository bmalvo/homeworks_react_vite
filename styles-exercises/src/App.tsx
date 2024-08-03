import { ThemeProvider } from "styled-components"

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
    
  </ThemeProvider>
}