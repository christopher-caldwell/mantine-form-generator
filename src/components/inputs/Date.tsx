import { DateInput, DateInputProps } from '@mantine/dates'
import { FieldValues } from 'react-hook-form'

import { CustomOverrideRenderArgs } from './CustomOverride'

/**
 * If you use, this, you must import the applicable styles
 * @example import '@mantine/dates/styles.css'
 */
export const DateFormInput = function <TData extends FieldValues>({
  field,
  fieldState: { error, invalid },
  dateInputProps
}: CustomOverrideRenderArgs<TData> & { dateInputProps?: DateInputProps }) {
  return <DateInput error={error?.message || invalid} {...field} {...dateInputProps} />
}
