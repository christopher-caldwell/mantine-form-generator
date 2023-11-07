import { FC } from 'react'
import { Alert, AppBar, Toolbar } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'

export const Header: FC = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          <DarkModeToggle />
        </Toolbar>
      </AppBar>
      <Alert sx={{ paddingTop: '55px' }} severity='warning'>
        Custom components are not yet supported by this demo. Please see the examples for usage.
      </Alert>
    </>
  )
}
