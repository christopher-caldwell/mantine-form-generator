import { Radio, RadioProps, RadioGroupProps, GridCol, Group, GroupProps } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { useMantineFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputRadio = function <TData extends FieldValues>({
  name,
  rules,
  options,
  radioGroupProps,
  groupProps,
  globalRadioProps,
  gridColProps
}: Props<TData>) {
  const { control } = useMantineFormContext<TData>()

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value = '' }, fieldState: { error, invalid } }) => (
          <Radio.Group {...radioGroupProps}>
            <Group {...groupProps}>
              {options.map(option => (
                <Radio
                  key={option.label?.toString()}
                  checked={value === option.value}
                  onChange={onChange}
                  error={error?.message || invalid}
                  {...globalRadioProps}
                  {...option}
                />
              ))}
            </Group>
          </Radio.Group>
        )}
      />
    </GridCol>
  )
}

/** Configuration specific to the RadioInput */
export type FormInputRadioProps = {
  options: RadioProps[]
  /** Props that will be given to to the `Radio.Group`. This is usually for labels and display attrs  */
  radioGroupProps?: Omit<RadioGroupProps, 'children'>
  /** Props that will be given to to the `Group` wrapping the radio buttons. This is usually for spacing and orientation  */
  groupProps?: GroupProps
  /** Props that will be given to every Radio component */
  globalRadioProps?: RadioProps
  helperText?: string
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputRadioProps
