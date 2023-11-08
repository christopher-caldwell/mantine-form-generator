import { Controller, FieldValues } from 'react-hook-form'
import { GridCol, SelectProps, Select, NativeSelect, NativeSelectProps } from '@mantine/core'

import { useMantineFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSelect = function <TData extends FieldValues>({
  name,
  nativeSelectProps,
  rules,
  selectProps,
  gridColProps
}: Props<TData>) {
  const { control } = useMantineFormContext<TData>()

  return (
    <GridCol {...gridColProps}>
      <Controller<TData>
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value = '', onBlur }, fieldState: { error, invalid } }) => {
          return (
            <>
              {nativeSelectProps ? (
                <NativeSelect
                  {...nativeSelectProps}
                  value={value}
                  onChange={onChange}
                  error={error?.message || invalid}
                />
              ) : (
                <Select
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message || invalid}
                  {...selectProps}
                />
              )}
            </>
          )
        }}
      />
    </GridCol>
  )
}

type _SelectProps = {
  nativeSelectProps?: never
  selectProps: SelectProps
}
type _NativeSelectProps = {
  nativeSelectProps: NativeSelectProps
  selectProps?: never
}

export type FormInputSelectProps = _SelectProps | _NativeSelectProps
type Props<TData extends FieldValues> = FormInputProps<TData> & FormInputSelectProps
