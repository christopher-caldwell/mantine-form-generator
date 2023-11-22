import { Checkbox, CheckboxProps, GridCol, CheckboxGroupProps, SimpleGridProps, SimpleGrid } from '@mantine/core'
import { Controller, FieldValues } from 'react-hook-form'

import { FormInputProps } from './shared'
import { useMantineFormContext } from '@/providers'

export const FormInputMultiCheckbox = function <TData extends FieldValues>({
  name,
  options,
  gridColProps,
  rules,
  checkboxGroupProps,
  globalCheckboxProps,
  checkboxGridProps
}: Props<TData>) {
  const { control } = useMantineFormContext<TData>()

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <Checkbox.Group {...checkboxGroupProps} value={value} onChange={onChange} error={error?.message || invalid}>
            <SimpleGrid {...checkboxGridProps}>
              {options.map((option, index) => {
                return <Checkbox key={option.name + '-' + index} {...globalCheckboxProps} {...option} />
              })}
            </SimpleGrid>
          </Checkbox.Group>
        )}
      />
    </GridCol>
  )
}

export type FormInputMultiCheckboxProps = {
  options: (CheckboxProps & { value: string })[]
  /** Props given to every `Checkbox` component */
  globalCheckboxProps?: CheckboxProps
  /** Props given to the `CheckboxGroup` component in charge of labels, etc */
  checkboxGroupProps?: Omit<CheckboxGroupProps, 'children' | 'value' | 'onChange'>
  /** Props given to the `SimpleGrid` component in charge of rendering the layout */
  checkboxGridProps?: SimpleGridProps
}
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputMultiCheckboxProps
