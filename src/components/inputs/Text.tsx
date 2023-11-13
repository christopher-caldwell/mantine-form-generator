import { useContext } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { GridCol, TextInput, TextInputProps } from '@mantine/core'

import { MantineFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputText = function <TData extends FieldValues>({
  name,
  rules,
  textInputProps,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MantineFormContext)
  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value = '', onBlur }, fieldState: { error, invalid } }) => (
          <TextInput
            {...textInputProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message || invalid}
          />
        )}
      />
    </GridCol>
  )
}

export type FormInputTextProps = {
  textInputProps?: TextInputProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputTextProps
