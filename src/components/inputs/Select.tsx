import { useContext } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { GridCol, SelectProps, Select } from '@mantine/core'

import { MuiFormContext } from '@/providers'
import { FormInputProps, SelectOption } from './shared'

export const FormInputSelect = function <TData extends FieldValues>({
  name,
  label,
  rules,
  options,
  selectProps,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  // const OptionsDisplay = inputProps?.SelectProps?.native
  //   ? options.map(({ value, label }) => (
  //       <option key={value} value={value}>
  //         {label}
  //       </option>
  //     ))
  //   : options.map(({ value, label }) => (
  //       <MenuItem key={value} value={value}>
  //         {label}
  //       </MenuItem>
  //     ))

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value = '', onBlur }, fieldState: { error } }) => (
          <Select value={value} onChange={onChange} {...selectProps} onBlur={onBlur} error={error?.message} />

          // <TextField
          //   {...inputProps}
          //   select
          //   fullWidth
          //   onChange={onChange}
          //   value={value}
          //   label={label}
          //   error={!!error}
          //   helperText={error ? error.message || ' ' : inputProps?.helperText || ' '}
          //   onBlur={e => {
          //     inputProps?.onBlur?.(e)
          //     onBlur()
          //   }}
          // >
          //   {OptionsDisplay}
          // </TextField>
        )}
      />
    </GridCol>
  )
}

export type FormInputSelectProps = {
  options: SelectOption[]
  selectProps?: SelectProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputSelectProps
