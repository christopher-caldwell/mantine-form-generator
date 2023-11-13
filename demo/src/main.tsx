import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { App } from './App'
import { theme } from './theme'
import './syntax.css'

const container = document.getElementById('root')
if(!container) throw new Error('No container found')
const root = createRoot(container)
root.render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MantineProvider>
  </StrictMode>
)
