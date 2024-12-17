import { createContext } from "react"

export type ThemeContextProps = {

    mode: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextProps>({

    mode: 'light'
})