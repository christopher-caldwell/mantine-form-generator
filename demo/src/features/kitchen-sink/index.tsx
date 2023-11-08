import { FC, useContext } from 'react'
import { MantineForm, MantineFormContext } from '@caldwell619/mantine-form-generator'
import { Button, Alert, Stack } from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'
import diff from 'microdiff'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useRecoilValue, useResetRecoilState } from 'recoil'

import { configAtom, configSelector, SomeObject } from '../../store'
import { defaultValues } from './data'

export const KitchenSinkForm: FC = () => {
  const { inputs, hasError } = useRecoilValue(configSelector)
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MantineFormContext)
  const onSubmit = (data: SomeObject) => {
    // Here you can do a diff to get what was updated - or whatever you wish to do.
    const patchDiff = diff(defaultValues, data)
    console.log('the difference between default and the inputs is:', patchDiff)
  }
  if (hasError) return <Alert c='red'>Invalid config</Alert>
  return (
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <form>
        <Stack mb='lg'>
          <MantineForm inputs={inputs} gridProps={{ gutter: 'lg' }} />
        </Stack>
        <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
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
      <Alert w='40%' c='red'>
        Invalid config. Please fix your errors, and reset.
      </Alert>
      <br />
      <Button variant='outlined' color='warning' onClick={hardReset}>
        Reset
      </Button>
      <Button variant='contained' onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </>
  )
}
