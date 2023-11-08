import { FC } from 'react'
import { UseFormProps } from 'react-hook-form'

import { MantineFormProvider } from '../providers'

export const withMantineForm = function <TProps extends Record<string, unknown>>(
  props: UseFormProps,
  Component: FC<TProps>
) {
  return (componentProps: TProps) => {
    return (
      <MantineFormProvider props={props}>
        <Component {...componentProps} />
      </MantineFormProvider>
    )
  }
}
