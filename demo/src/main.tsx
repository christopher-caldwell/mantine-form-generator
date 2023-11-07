import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'
import './syntax.css'

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
