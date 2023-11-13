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
  switch (type) {
    case 'select': {
      const { control, ...restProps } = config as unknown as SelectConfig<TData>['config']
      return <FormInputSelect {...control} {...restProps} />
    }
    case 'text': {
      const { control, ...restProps } = config as unknown as TextConfig<TData>['config']
      return <FormInputText {...control} {...restProps} />
    }
    case 'radio': {
      const { control, ...restProps } = config as unknown as RadioConfig<TData>['config']
      return <FormInputRadio {...control} {...restProps} />
    }
    case 'checkbox': {
      const { control, ...restProps } = config as unknown as CheckboxConfig<TData>['config']
      return <FormInputCheckbox {...control} {...restProps} />
    }
    case 'custom': {
      const { control, ...restProps } = config as unknown as CustomOverrideConfig<TData>['config']
      return <FormInputCustomOverride {...restProps} {...control} />
    }
    case 'switch': {
      const { control, ...restProps } = config as unknown as SwitchConfig<TData>['config']
      return <FormInputSwitch {...control} {...restProps} />
    }
    case 'multiCheckbox': {
      const { control, ...restProps } = config as unknown as MultiCheckboxConfig<TData>['config']
      return <FormInputMultiCheckbox {...control} {...restProps} />
    }
    default:
      throw new Error(
        `Unsupported input type: ${type} given. Expected one of: 'text', 'select', 'radio', 'custom', 'switch', 'checkbox', 'manyOptionsSingleChoice`
      )
  }
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
  config: {
    control: FormInputCustomOverrideProps<TData>
  }
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
