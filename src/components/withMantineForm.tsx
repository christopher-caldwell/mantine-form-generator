import { FC } from 'react'
import { FieldValues, UseFormProps } from 'react-hook-form'

import { MantineFormProvider } from '../providers'

export const withMantineForm = function <TProps extends Record<string, unknown>, TFormType extends FieldValues>(
  props: UseFormProps<TFormType>,
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
