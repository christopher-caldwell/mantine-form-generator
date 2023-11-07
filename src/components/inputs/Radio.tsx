import { useContext } from 'react'
import { Radio, RadioGroup, RadioProps, RadioGroupProps, Grid, GridCol } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps, SelectOption } from './shared'

export const FormInputRadio = function <TData extends FieldValues>({
  name,
  label,
  rules,
  options,
  radioGroupProps,
  globalRadioProps,
  helperText,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value = false }, fieldState: { error } }) => (
          <Radio checked={value} onChange={onChange} error={error?.message} />
          // <FormControl component='fieldset' error={!!error}>
          //   <FormLabel component='legend'>{label}</FormLabel>
          //   <RadioGroup {...radioGroupProps} value={value} onChange={onChange}>
          //     {options.map(option => (
          //       <FormControlLabel
          //         key={option.label}
          //         {...option}
          //         control={<Radio {...globalRadioProps} {...option.radioProps} />}
          //       />
          //     ))}
          //   </RadioGroup>
          //   <FormHelperText>{error ? error.message || ' ' : helperText || ' '}</FormHelperText>
          // </FormControl>
        )}
      />
    </GridCol>
  )
}

/** Configuration specific to the RadioInput */
export type FormInputRadioProps = {
  options: (SelectOption & {
    /** Props that will be given to this specific Radio component. These will override the `globalRadioProps` if provided. */
    radioProps?: RadioProps
  })[]
  radioGroupProps?: RadioGroupProps
  /** Props that will be given to every Radio component */
  globalRadioProps?: RadioProps
  helperText?: string
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputRadioProps
