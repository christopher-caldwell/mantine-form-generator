import { FC, useContext } from 'react'
import { MuiForm, MuiFormContext } from '@caldwell619/mui-form-generator'
import { Button, Alert } from '@mui/material'
import { UseFormReturn } from 'react-hook-form'
import diff from 'microdiff'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useResetRecoilState } from 'recoil'

// import { FormInputDate } from '@/components'
import { configAtom, configSelector, SomeObject } from '@/store'
import { useRecoilValue } from 'recoil'

export const defaultValues: SomeObject = {
  one: '1',
  two: 'Cody',
  three: 'Wolffe',
  favoriteCommander: 'Cody',
  favoriteUnit: '501st',
  isSignedUpForNewsletter: false,
  startDate: new Date(),
  doesWantIceCream: false,
  isWifiOn: true,
  options: [],
  favoriteSeries: ''
}

export const KitchenSinkForm: FC = () => {
  const { inputs, hasError } = useRecoilValue(configSelector)
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MuiFormContext)
  const onSubmit = (data: SomeObject) => {
    // Here you can do a diff to get what was updated - or whatever you wish to do.
    const patchDiff = diff(defaultValues, data)
    console.log('the difference between default and the inputs is:', patchDiff)
  }
  if (hasError) return <Alert severity='error'>Invalid config</Alert>
  return (
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <form>
        <MuiForm inputs={inputs} gridSpacing={1} />
        <Button sx={{ marginTop: ({ spacing }) => spacing(3) }} variant='outlined' onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </form>
    </ErrorBoundary>
  )
}

const ErrorDisplay: FC<FallbackProps> = ({ resetErrorBoundary }) => {
  const resetConfig = useResetRecoilState(configAtom)
  const hardReset = () => {
    resetConfig()
    resetErrorBoundary()
  }
  return (
    <>
      <Alert sx={{ width: '40%' }} severity='error'>
        Invalid config. Please fix your errors, and reset.
      </Alert>
      <br />
      <Button sx={{ marginRight: theme => theme.spacing(2) }} variant='outlined' color='warning' onClick={hardReset}>
        Reset
      </Button>
      <Button variant='contained' onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </>
  )
}

// export interface SomeObject {
//   one: string
//   two: string
//   three: string
//   favoriteCommander: string
//   favoriteUnit: string
//   isSignedUpForNewsletter: boolean
//   startDate: Date
//   doesWantIceCream: boolean
//   isWifiOn: boolean
//   options: string[]
//   favoriteSeries: string
// }
