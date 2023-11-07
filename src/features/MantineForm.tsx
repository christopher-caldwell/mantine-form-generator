import { GridProps, Grid } from '@mantine/core'

import { FormInput, Config } from '@/components'
import { FieldValues } from 'react-hook-form'

export const MantineForm = function <TData extends FieldValues>({ inputs, gridProps }: Props<TData>) {
  return (
    <Grid {...gridProps}>
      {inputs.map(input => (
        <FormInput key={input.config.control.name} {...input} />
      ))}
    </Grid>
  )
}

export interface Props<TData extends FieldValues> {
  gridProps?: GridProps
  inputs: Config<TData>[]
}