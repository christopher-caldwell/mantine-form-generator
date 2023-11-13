import { GridProps, Grid } from '@mantine/core'
import { FieldValues } from 'react-hook-form'

import { FormInput, Config } from '@/components'

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
