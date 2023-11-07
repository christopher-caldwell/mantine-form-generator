// import { useContext } from 'react'
// import {
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   Typography,
//   GridProps,
//   CheckboxProps,
//   TypographyProps,
//   GridCol
// } from '@mantine/core'
// import { Controller, FieldValues, useWatch } from 'react-hook-form'

// import { FormInputProps } from './shared'
// import { useMantineFormContext } from '@/providers'

// export const FormInputMultiCheckbox = function <TData extends FieldValues>({
//   name,
//   label,
//   options,
//   gridColProps,
//   globalCheckboxProps,
//   globalGridProps,
//   rules,
//   helperText,
//   subtitleProps = { variant: 'caption', sx: { color: ({ palette }) => palette.text.secondary } },
//   titleProps = { variant: 'h6' }
// }: Props<TData>) {
//   const { control, setValue, getValues } = useMantineFormContext<TData>()

//   const selectedItems = getValues(name) as string[]
//   useWatch({ control })

//   return (
//     <GridCol {...gridColProps}>
//       {/* <Grid item xs={12}>
//         <Typography {...titleProps}>{label}</Typography>
//         <Typography {...subtitleProps}>{helperText}</Typography>
//       </Grid> */}
//       <Controller<TData>
//         name={name}
//         control={control}
//         rules={rules}
//         render={() => (
//           <>
//             {options.map(({ label, value: checkboxValue, gridProps, checkboxProps }) => {
//               // The `checkboxValue` can be omitted, if so use the label as the value
//               const thisCheckboxValue = checkboxValue || label
//               return (
//                 <Grid {...(gridProps || globalGridProps)} container item key={label + checkboxValue}>
//                   <FormControl key={label}>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           {...(checkboxProps || globalCheckboxProps)}
//                           // TODO: Consider disabled
//                           checked={selectedItems.includes(thisCheckboxValue)}
//                           onChange={() => handleSelect(thisCheckboxValue)}
//                         />
//                       }
//                       label={label}
//                     />
//                   </FormControl>
//                 </Grid>
//               )
//             })}
//           </>
//         )}
//       />
//     </Grid>
//   )
// }

// export type FormInputMultiCheckboxProps = {
//   options: {
//     label: string
//     /** If provided, this will be the value set to the `name` key. If left out, the `label` will be used. */
//     value?: string
//     gridProps?: GridProps
//     checkboxProps?: CheckboxProps
//   }[]
//   /** Checkbox props given to each option, if the specific `checkboxProps` is omitted from the indiviual option */
//   globalCheckboxProps?: CheckboxProps
//   /** Grid props given to each option, if the specific `gridProps` is omitted from the indiviual option */
//   globalGridProps?: GridProps
//   helperText?: string
//   titleProps?: TypographyProps
//   subtitleProps?: TypographyProps
// }
// type Props<TData> = FormInputProps<TData> & FormInputMultiCheckboxProps
