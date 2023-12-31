import { selector } from 'recoil'
import { Config } from '@caldwell619/mantine-form-generator'

import { configAtom, SomeObject } from './atoms'

export const configSelector = selector<{ inputs: Config<SomeObject>[]; hasError: boolean }>({
  key: 'config-selector',
  get: ({ get }) => {
    const inputsString = get(configAtom)
    try {
      const parsedInputs = JSON.parse(inputsString) as Config<SomeObject>[]
      return {
        inputs: parsedInputs,
        hasError: false
      }
    } catch (e) {
      return {
        inputs: [],
        hasError: true
      }
    }
  }
})

export const resultSelector = selector<{ inputs: Config<SomeObject>[]; hasError: boolean }>({
  key: 'result-selector',
  get: ({ get }) => {
    const inputsString = get(configAtom)
    try {
      const parsedInputs = JSON.parse(inputsString) as Config<SomeObject>[]
      return {
        inputs: parsedInputs,
        hasError: false
      }
    } catch (e) {
      return {
        inputs: [],
        hasError: true
      }
    }
  }
})
