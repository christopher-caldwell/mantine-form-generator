import { useContext } from 'react'
import { Switch, GridCol, SwitchProps } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSwitch = function <TData extends FieldValues>({
  name,
  label,
  rules,
  switchProps,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value = false }, fieldState: { error } }) => (
          <Switch checked={value} onChange={onChange} error={error?.message} {...switchProps} />
          // <FormGroup {...formGroupProps}>
          //   <FormControlLabel
          //     {...formControlLabelProps}
          //     control={
          //       <Switch
          //         {...switchProps}
          //         checked={value as boolean}
          //         onChange={onChange}
          //         inputProps={{ 'aria-label': 'controlled' }}
          //       />
          //     }
          //     label={label}
          //   />
          //   <FormHelperText>{error ? error.message || ' ' : helperText || ' '}</FormHelperText>
          // </FormGroup>
        )}
      />
    </GridCol>
  )
}

/** Configuration specific to the Switch Input */
export type FormInputSwitchProps = {
  switchProps?: SwitchProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputSwitchProps
