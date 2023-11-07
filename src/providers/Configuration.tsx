import { createContext, useContext } from 'react'
import { UseFormReturn, useForm, UseFormProps, FieldValues } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MuiFormContext = createContext<MantineFormProviderContext<any>>({} as MantineFormProviderContext<any>)
export const MuiFormProvider = function <TData extends FieldValues>({ children, props }: Props<TData>) {
  const useFormResult = useForm<TData>(props)

  return <MuiFormContext.Provider value={useFormResult}>{children}</MuiFormContext.Provider>
}

type Props<TData extends FieldValues> = {
  props?: UseFormProps<TData>
  children: JSX.Element
}

type MantineFormProviderContext<TData extends FieldValues> = UseFormReturn<TData>

export const useMantineFormContext = function <TData extends FieldValues>() {
  return useContext(MuiFormContext) as MantineFormProviderContext<TData>
}
