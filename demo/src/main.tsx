import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

import { App } from './App'
import { theme } from './theme'
import './syntax.css'

ReactDOM.render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MantineProvider>
  </StrictMode>,
  document.getElementById('root')
)
