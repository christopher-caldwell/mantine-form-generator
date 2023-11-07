import { FC } from 'react'
import { MuiFormProvider } from '@caldwell619/mui-form-generator'
import { Typography, Box } from '@mui/material'

import { Header } from '@/components'
import { Config } from './features/config'
import { KitchenSinkForm, defaultValues } from './features/kitchen-sink'

const App: FC = () => {
  return (
    <>
      <Header />
      <MuiFormProvider props={{ defaultValues }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1.5%',
            position: 'relative'
          }}
        >
          <Config />
          <Box sx={{ width: { lg: '55vw', xl: '62vw' } }}>
            <Typography variant='h1' sx={{ fontSize: '2em', marginBottom: ({ spacing }) => spacing(3) }}>
              Result
            </Typography>

            <KitchenSinkForm />
          </Box>
        </Box>
      </MuiFormProvider>
    </>
  )
}

export default App
