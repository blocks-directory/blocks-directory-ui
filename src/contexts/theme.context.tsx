import React, { memo, useCallback, useMemo } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme'
import { StylesProvider, ThemeProvider as MuiProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { useLocalStorage } from 'react-use'
import { get, includes } from 'lodash-es'

import * as themesStyles from '../styles/themes'
import GlobalStyles from '../styles/global.styles'

export type ThemeType = 'dark' | 'light'

interface ThemeProviderProps {
  children: JSX.Element
}

interface ThemeState {
  theme: Theme
  themeType: ThemeType
  toggleTheme: () => void
}

const themes = ['light', 'dark']

const ThemeContext = React.createContext({} as ThemeState)

const ThemeProvider = memo(({ children }: ThemeProviderProps) => {
  const [themeType, setTheme] = useLocalStorage<ThemeType>('cv-theme', 'light')
  const styles = get(themesStyles, `[${themeType}]`)

  const theme = useMemo(() => createMuiTheme({
    palette: {
      type: includes(themes, themeType) ? themeType : 'light',
      ...styles,
    },
    overrides: {
      MuiCard: {
        root: {
          borderRadius: '10px',
          boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.1);',
        },
      },
      MuiInput: {
        root: {
          background: '#F3F4F5',
          borderRadius: '10px',
          padding: '2px 12px',
        },
      },
    },
    typography: {
      fontFamily: ['Quicksand', 'Segoe UI', '"sans-serif normal"'].join(','),
      caption: {
        fontSize: '16px',
        lineHeight: '20px',
      },
      h2: {
        fontWeight: 'bold',
        fontSize: '32px',
        textTransform: 'uppercase',
      },
      h4: {
        fontWeight: 500,
        fontSize: '32px',
      },
      h5: {
        fontWeight: 'bold',
        fontSize: '24px',
      },
    },
  }), [styles, themeType])

  const toggleTheme = useCallback(() => {
    setTheme((current: ThemeType) => (current === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      <MuiProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyles />
          <CssBaseline />
          <StyledProvider theme={theme}>
            {children}
          </StyledProvider>
        </StylesProvider>
      </MuiProvider>
    </ThemeContext.Provider>
  )
})

export { ThemeContext, ThemeProvider }
