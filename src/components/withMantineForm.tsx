import { FC } from 'react'
import { UseFormProps } from 'react-hook-form'

import { MuiFormProvider } from '../providers'

export const withMantineForm = function <TProps extends Record<string, unknown>>(
  props: UseFormProps,
  Component: FC<TProps>
) {
  return (componentProps: TProps) => {
    return (
      <MuiFormProvider props={props}>
        <Component {...componentProps} />
      </MuiFormProvider>
    )
  }
}
