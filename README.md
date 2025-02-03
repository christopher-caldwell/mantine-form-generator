# Mantine Form Generator

An API for crafting Mantine powered forms.

[![NPM](https://img.shields.io/npm/v/@caldwell619/mantine-form-generator.svg)](https://www.npmjs.com/package/@caldwell619/mantine-form-generator) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/mantine-form-generator)](https://www.npmjs.com/package/@caldwell619/mantine-form-generator) [![](https://img.shields.io/github/last-commit/christopher-caldwell/mantine-form-generator)]() [![](https://img.shields.io/npm/types/typescript)]()

## Demo

[GH Pages](https://christopher-caldwell.github.io/mantine-form-generator/)

## Prerequisite

You'll need to fully setup Mantine, following [this](https://mantine.com/getting-started/installation/) guide.

## Getting Started

```shell
yarn add @caldwell619/mantine-form-generator
```

## Quick Example

The following will render a single text input with a label of "One".

### Highlights

- The `name` property must match one of your object keys. This is the same behavior as [react-hook-form](https://react-hook-form.com/).
- Each type of input has their own `config`. The specifics are determined by the `type` property. For example, `select` requires you to pass `options`.

### Provider

**You must add a provider that wraps your form FOR EACH FORM YOU USE. **

This is not shown in this example, but is shown in [this one](./demo/src/App.tsx), with just the single form.

### Code

```tsx
import { FC, useContext } from 'react'
import { MantineForm, Config, MantineFormContext } from '@caldwell619/mantine-form-generator'
import { Button } from '@mantine/core'
import { diff } from 'deep-object-diff'
import type { UseFormReturn } from 'react-hook-form'

export const defaultValues: SomeObject = {
  one: 'Rex',
  two: 'Cody',
  three: 'Wolffe'
}

const inputs: Config<SomeObject>[] = [
  {
    type: 'text',
    config: {
      control: {
        name: 'one',
        label: 'One'
      }
    }
  }
]

export const Form: FC = () => {
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MantineFormContext)
  const onSubmit = (data: SomeObject) => {
    console.log('Current state of form', data)
  }
  return (
    <form>
      <MantineForm inputs={inputs} />
      <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </form>
  )
}

export interface SomeObject {
  one: string
  two: string
  three: string
}
```

### Result

The result is just a single input and your button under it. Clicking submit will console log an object showing your defaults:

```ts
{
  one: 'Rex',
  two: 'Cody',
  three: 'Wolffe'
}
```

## Detailed Example

There is a working example with a select input and a text field that can be found [here](./demo/src/App.tsx)

## Supported Inputs

Currently, there are only 2 supported inputs, but this list will grow with time.

- Single Checkbox
- Custom Overrides
- Radio
- Select
- Switch
- Text
- Multi Checkbox ( Select all that apply )
- Checkbox Radio ( Many options, can only choose one )
- Layout ( Useful for separating sections )

## Custom Overrides

If an input you want is not supported, you can _"easily"_ pass your own custom input into the render. For an example, see the [Date override](./demo/src/components/Date.tsx).

<details>

<summary>Some override examples</summary>

### Date

This is an example of using a Date picker, which is not supported natively by this tool, because they are so specific.

```tsx
import { DateInput, DateInputProps } from '@mantine/dates'
import type  { CustomOverrideRenderArgs } from '@caldwell619/mantine-form-generator'
import type  { FieldValues } from 'react-hook-form'
import '@mantine/dates/styles.css'

export const DateFormInput = function <TData extends FieldValues>({
  field: { name, value, onChange },
  fieldState: { error, invalid },
  dateInputProps
}: CustomOverrideRenderArgs<TData> & { dateInputProps?: DateInputProps }) {
  return (
    <DateInput {...dateInputProps} value={value} onChange={onChange} error={error?.message || invalid} name={name} />
  )
}
```

### Text Area

```tsx
import type  { CustomOverrideRenderArgs } from '@caldwell619/mantine-form-generator'
import { Textarea, TextareaProps } from '@mantine/core'
import type  { FieldValues } from 'react-hook-form'

export const TextareaFormInput = function <TData extends FieldValues>({
  field: { name, value, onChange },
  fieldState: { error, invalid },
  textareaProps
}: CustomOverrideRenderArgs<TData> & { textareaProps?: TextareaProps }) {
  return <Textarea {...textareaProps} error={error?.message || invalid} name={name} value={value} onChange={onChange} />
}
```

### Multi-Select

```tsx
import type { CustomOverrideRenderArgs } from '@caldwell619/mantine-form-generator'
import { MultiSelect, MultiSelectProps } from '@mantine/core'
import type { FieldValues } from 'react-hook-form'

export const MultiSelectInput = function <TData extends FieldValues>({
  field: { name, value, onChange },
  fieldState: { error, invalid },
  multiSelectProps
}: CustomOverrideRenderArgs<TData> & { multiSelectProps?: MultiSelectProps }) {
  return (
    <MultiSelect
      {...multiSelectProps}
      error={error?.message || invalid}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}
```

</details>

</details>

<details>
<summary>
A layout example
</summary>

Along the same line as a custom override, you can also use a `layout` type. This is helpful for grouping form sections, or providing a label.


```tsx
const spacerConfig: Config<SomeObject> = {
  type: 'layout',
  config: {
    render() {
      return <Space h='lg' />
    }
  }
}

const sectionName: Config<SomeObject> = {
  type: 'layout',
  config: {
    render() {
      return (
        <GridCol>
          <Title order={2} fz="xl">
            Your Name
          </Title>
        </GridCol>
      )
    },
  },
}

const inputs: Config<SomeObject>[] = [
  sectionName,
  spacerConfig
]

```

</details>

## Validation

You may pass rules to each form component that act as validation. You can read more about the validation rules on [react hook form](https://react-hook-form.com/api/useform/register) under the "Register Options".

These rules are optional, and will be applied to the unit they are applied to. If none are given, it is assumed the input can be empty upon submission.

There is also validation in the example, [here](./example/src/forms/kitchen-sink/index.tsx).

```ts
rules: {
  required: { value: true, message: 'This is required' },
  pattern: { value: /^[0-9]*$/, message: 'Must be a number' }
},
```

## Bundle Size

The bundle size is a bit deceptive, as the published version is un-minified JS. I haven't found the best way to go about this, but it seems as if the best way is to just provide the source, and let you bundle it.

However you React will also tree shake and minify this library. I'm seeing an average of 3-5kb depending on which inputs are used. This will be less if you are already using these inputs elsewhere in the bundle.

## HoC to hook into the Form Provider

Sometime wrapping the consumer is tedious, you don't really need it at the next level, but it has to go somewhere.

Using `withMantineForm`, you can access the form config from the same component. It's similar to using `MantineFormContext.Consumer`, but a bit more convenient.

<details>
<summary>
2 React components
</summary>

```tsx
import { UseFormReturn } from 'react-hook-form'
import { MantineFormContext, MantineForm } from '@caldwell619/mantine-form-generator'



const Form = () => {
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MantineFormContext)
  return (
    <MantineForm inputs={inputs} gridSpacing={1} />
  )
}

const WrappedForm: FC = () => {
  return (
    <MantineForm>
      <Form>
    </MantineForm>
  )
}
```

</details>

<details>
<summary>
Higher order wrapper
</summary>

```tsx
import { UseFormReturn } from 'react-hook-form'
import { withMantineForm, MantineFormContext, MantineForm } from '@caldwell619/mantine-form-generator'

export const Home = withMantineForm({ defaultValues }, () => {
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MantineFormContext)
  return <MantineForm inputs={inputs} gridSpacing={1} />
})
```

</details>