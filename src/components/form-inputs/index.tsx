import {
  FormInputProps,
  FormInputSelect,
  FormInputSelectProps,
  FormInputText,
  FormInputTextProps,
  FormInputRadio,
  FormInputRadioProps,
  FormInputCheckbox,
  FormInputCheckboxProps,
  FormInputCustomOverride,
  FormInputCustomOverrideProps,
  FormInputSwitch,
  FormInputSwitchProps,
  FormInputMultiCheckbox,
  FormInputMultiCheckboxProps
} from '@/components'
import { FieldValues } from 'react-hook-form'

export const FormInput = function <TData extends FieldValues>({ type, config }: Config<TData>) {
  if (type === 'select') {
    const { control, ...rest } = config
    return <FormInputSelect {...control} {...rest} />
  }
  if (type === 'text') {
    const { control, ...restProps } = config
    return <FormInputText {...control} {...restProps} />
  }
  if (type === 'radio') {
    const { control, ...restProps } = config
    return <FormInputRadio {...control} {...restProps} />
  }
  if (type === 'checkbox') {
    const { control, ...restProps } = config
    return <FormInputCheckbox {...control} {...restProps} />
  }
  if (type === 'custom') {
    const { control, ...restProps } = config
    return <FormInputCustomOverride {...restProps} {...control} />
  }
  if (type === 'switch') {
    const { control, ...restProps } = config
    return <FormInputSwitch {...control} {...restProps} />
  }
  if (type === 'multiCheckbox') {
    const { control, ...restProps } = config
    return <FormInputMultiCheckbox {...control} {...restProps} />
  }

  throw new Error(
    `Unsupported input type: ${type} given. Expected one of: 'text', 'select', 'radio', 'custom', 'switch', 'checkbox', 'manyOptionsSingleChoice`
  )
}
type InputControl<TData extends FieldValues> = {
  control: FormInputProps<TData>
}
type SelectConfig<TData extends FieldValues> = {
  type: 'select'
  config: InputControl<TData> & FormInputSelectProps
}
type TextConfig<TData extends FieldValues> = {
  type: 'text'
  config: InputControl<TData> & FormInputTextProps
}

type RadioConfig<TData extends FieldValues> = {
  type: 'radio'
  config: InputControl<TData> & FormInputRadioProps
}

type CheckboxConfig<TData extends FieldValues> = {
  type: 'checkbox'
  config: InputControl<TData> & FormInputCheckboxProps
}

type CustomOverrideConfig<TData extends FieldValues> = {
  type: 'custom'
  config: InputControl<TData> & FormInputCustomOverrideProps<TData>
}

type SwitchConfig<TData extends FieldValues> = {
  type: 'switch'
  config: InputControl<TData> & FormInputSwitchProps
}

type MultiCheckboxConfig<TData extends FieldValues> = {
  type: 'multiCheckbox'
  config: InputControl<TData> & FormInputMultiCheckboxProps
}

export type Config<TData extends FieldValues> =
  | TextConfig<TData>
  | SelectConfig<TData>
  | RadioConfig<TData>
  | CheckboxConfig<TData>
  | CustomOverrideConfig<TData>
  | SwitchConfig<TData>
  | MultiCheckboxConfig<TData>
