import { FC } from 'react'
import { MantineFormProvider } from '@caldwell619/mantine-form-generator'
import { Grid, Stack, Title } from '@mantine/core'

// import { Header } from '@/components'
import { Config } from './features/config'
import { KitchenSinkForm } from './features/kitchen-sink'
import { defaultValues } from './features/kitchen-sink/data'

export const App: FC = () => {
  return (
    <>
      {/* <Header /> */}
      <MantineFormProvider props={{ defaultValues }}>
        <Grid gutter='lg' p='md'>
          <Grid.Col span={4}>
            <Config />
          </Grid.Col>
          <Grid.Col span={8}>
            <Stack>
              <Title>Result</Title>
              <KitchenSinkForm />
            </Stack>
          </Grid.Col>
        </Grid>
      </MantineFormProvider>
    </>
  )
}
