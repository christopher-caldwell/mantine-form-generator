import { Textarea, TextareaProps } from '@mantine/core'
import { FieldValues } from 'react-hook-form'
import { CustomOverrideRenderArgs } from './CustomOverride'

export const TextareaFormInput = function <TData extends FieldValues>({
  field,
  fieldState: { error, invalid },
  textareaProps
}: CustomOverrideRenderArgs<TData> & { textareaProps?: TextareaProps }) {
  return <Textarea {...textareaProps} error={error?.message || invalid} {...field} />
}
