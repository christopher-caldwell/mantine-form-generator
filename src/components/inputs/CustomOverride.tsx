import { useContext } from 'react'
import { GridCol, GridColProps } from '@mantine/core'
import {
  Path,
  Controller,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues
} from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputCustomOverride = function <TData extends FieldValues>({
  name,
  children,
  rules,
  gridColProps
}: FormInputCustomOverrideProps<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <GridCol {...gridColProps}>
      <Controller<TData> rules={rules} name={name} control={control} render={children} />
    </GridCol>
  )
}

export type CustomOverrideRenderArgs<TData extends FieldValues> = {
  field: ControllerRenderProps<TData, Path<TData>>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<TData>
}
export type FormInputCustomOverrideProps<TData extends FieldValues> = {
  children: (options: CustomOverrideRenderArgs<TData>) => JSX.Element
  name: FormInputProps<TData>['name']
  rules?: FormInputProps<TData>['rules']
  gridColProps?: GridColProps
}
