import { SomeObject } from '../../store'

export const defaultValues: SomeObject = {
  one: '1',
  two: 'Cody',
  three: 'Wolffe',
  favoriteCommander: 'Cody',
  favoriteUnit: '501st',
  isSignedUpForNewsletter: false,
  startDate: new Date(),
  doesWantIceCream: false,
  isWifiOn: true,
  options: [],
  favoriteSeries: '',
  nullCheckbox: null
}

type NullPartial<T> = { [P in keyof T]?: T[P] | null | undefined; }

export const valuesAsNull = Object.keys(defaultValues).reduce<NullPartial<SomeObject>>((acc, key) => {
  acc[key as string & keyof SomeObject] = null
  return acc
}, {})
