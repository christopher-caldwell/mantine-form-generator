import { useContext } from 'react'
import { Switch, GridCol, SwitchProps } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { MantineFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSwitch = function <TData extends FieldValues>({
  name,
  rules,
  switchProps,
  gridColProps
}: Props<TData>) {
  const { control } = useContext(MantineFormContext)

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <Switch checked={value ?? false} onChange={onChange} error={error?.message || invalid} {...switchProps} />
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
