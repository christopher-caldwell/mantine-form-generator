import { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { GridColProps, GridProps } from '@mantine/core'

export interface FormInputProps<TData extends FieldValues> {
  name: Path<TData>
  label: string
  rules?: Omit<RegisterOptions<TData>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  gridColProps?: GridColProps
  gridProps?: GridProps
}

export interface SelectOption {
  label: string
  value: string
}
