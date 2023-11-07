import { FC, createContext, Dispatch, SetStateAction } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocalStorage } from '@caldwell619/react-hooks'

export const WhichTheme = createContext<IWhichTheme>({} as IWhichTheme)

export const WhichThemeProvider: FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useLocalStorage<ThemeName>('theme', prefersDarkMode ? 'dark' : 'light', true)

  return <WhichTheme.Provider value={{ theme, setTheme }}>{children}</WhichTheme.Provider>
}

type ThemeName = 'dark' | 'light'
interface IWhichTheme {
  theme: ThemeName
  setTheme: Dispatch<SetStateAction<ThemeName>>
}
