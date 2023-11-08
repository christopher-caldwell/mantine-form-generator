import { FC } from 'react'
import { Anchor, AppShell, Flex, Grid, Group, Text } from '@mantine/core'
import { IconBrandGithub, IconBrandNpm } from '@tabler/icons-react'

export const Layout: FC<LayoutProps> = ({ form, config, result }) => {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Flex h='100%' p='md' justify='space-between'>
          <Text fw={500}>@caldwell619/mantine-form-generator</Text>
          <Group>
            <Anchor href=''>
              <IconBrandGithub />
            </Anchor>
            <Anchor href=''>
              <IconBrandNpm />
            </Anchor>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main m={0}>
        <Grid gutter='lg'>
          <Grid.Col span={4}>{config}</Grid.Col>
          <Grid.Col span={4}>{form}</Grid.Col>
          <Grid.Col span={4}>{result}</Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  )
}

type LayoutProps = {
  form: JSX.Element
  config: JSX.Element
  result: JSX.Element
}
