import { FC } from 'react'
import { MantineForm, useMantineFormContext } from '@caldwell619/mantine-form-generator'
import { Button, Alert, Stack, Group } from '@mantine/core'
import diff from 'microdiff'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import { configAtom, configSelector, resultAtom, SomeObject } from '../../store'
import { defaultValues, valuesAsNull } from './data'

export const KitchenSinkForm: FC = () => {
  const { inputs, hasError } = useRecoilValue(configSelector)
  const setResult = useSetRecoilState(resultAtom)
  const { handleSubmit, reset } = useMantineFormContext<SomeObject>()
  const onSubmit = (data: SomeObject) => {
    // Here you can do a diff to get what was updated - or whatever you wish to do.
    setResult(JSON.stringify(data, null, 2))
    const patchDiff = diff(defaultValues, data)
    console.log('the difference between default and the inputs is:', patchDiff)
  }

  const handleReset = () => {
    //@ts-expect-error Expects undefined, but undefined doesn't reset form
    reset(valuesAsNull)
  }
  if (hasError) return <Alert c='red'>Invalid config</Alert>
  return (
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <form>
        <Stack mb='lg'>
          <MantineForm inputs={inputs} gridProps={{ gutter: 'lg' }} />
        </Stack>
        <Group>
          <Button variant='outline' onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Group>
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
