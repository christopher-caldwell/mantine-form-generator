import { MuiFormProvider } from '@caldwell619/mui-form-generator'
import { Typography, Box } from '@mui/material'

import { Form as KitchenSinkForm, defaultValues } from './forms/kitchen-sink'

function App() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: ({ spacing }) => spacing(3) }}>
      <Box sx={{ maxWidth: { xs: '95vw', sm: '90vw', md: '70vw', lg: '60vw' } }}>
        <Typography variant='h1' sx={{ fontSize: '2em', marginBottom: ({ spacing }) => spacing(3) }}>
          Kitchen Sink
        </Typography>
        <MuiFormProvider props={{ defaultValues }}>
          <KitchenSinkForm />
        </MuiFormProvider>
      </Box>
    </Box>
  )
}

export default App
