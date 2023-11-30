import { Checkbox, CheckboxProps, GridCol } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { useMantineFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputCheckbox = function <TData extends FieldValues>({
  name,
  rules,
  checkboxProps,
  gridColProps
}: Props<TData>) {
  const { control } = useMantineFormContext<TData>()

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <Checkbox checked={value ?? false} onChange={onChange} error={error?.message || invalid} {...checkboxProps} />
        )}
      />
    </GridCol>
  )
}

export type FormInputCheckboxProps = {
  checkboxProps?: CheckboxProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputCheckboxProps
