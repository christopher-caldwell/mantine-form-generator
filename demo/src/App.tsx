import { FC } from 'react'
import { MantineFormProvider } from '@caldwell619/mantine-form-generator'
import { Stack, Title } from '@mantine/core'

// import { Header } from '@/components'
import { Config } from './features/config'
import { KitchenSinkForm } from './features/kitchen-sink'
import { defaultValues } from './features/kitchen-sink/data'
import { Layout } from './Layout'
import { Result } from './features/result'

export const App: FC = () => {
  return (
    <MantineFormProvider props={{ defaultValues }}>
      <Layout
        form={
          <Stack>
            <Title>Form</Title>
            <KitchenSinkForm />
          </Stack>
        }
        config={<Config />}
        result={<Result />}
      />
    </MantineFormProvider>
  )
}
