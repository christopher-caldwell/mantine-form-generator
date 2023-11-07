import { useContext } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { GridCol, TextInput, TextInputProps } from '@mantine/core'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputText = function <TData extends FieldValues>({
  name,
  rules,
  label,
  textInputProps,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value = '', onBlur }, fieldState: { error } }) => (
          <TextInput value={value} onChange={onChange} onBlur={onBlur} error={error?.message} {...textInputProps} />
          // <TextField
          //   {...textFieldProps}
          //   // Making the helper text a constant prevents layout shift when messages appear
          //   helperText={error ? error.message || ' ' : textFieldProps?.helperText || ' '}
          //   error={!!error}
          //   onChange={onChange}
          //   value={value}
          //   fullWidth
          //   label={label}
          //   onBlur={e => {
          //     textFieldProps?.onBlur?.(e)
          //     onBlur()
          //   }}
          // />
        )}
      />
    </GridCol>
  )
}

export type FormInputTextProps = {
  textInputProps?: TextInputProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputTextProps
