import { FC, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

import { WhichTheme } from 'providers/ChosenTheme'

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useContext(WhichTheme)
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const brandColor = '#55c6ce'
const secondaryBrandColor = '#bea599'
const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDark = theme === 'dark'
  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: isDark ? '#242526' : '#f0f0f0',
        paper: isDark ? '#303030' : '#ffffff',
      },
      primary: {
        main: brandColor,
      },
      secondary: {
        main: secondaryBrandColor,
      },
      info: {
        main: '#ffffff',
      },
      error: {
        main: 'rgb(232, 51, 51)',
      },
      success: {
        main: 'rgb(76,175,80)',
      },
    },
  })
}
