import { atom } from 'recoil'
import { Config } from '@caldwell619/mui-form-generator'

// import { FormInputDate } from '@/components'

const inputs: Config<SomeObject>[] = [
  {
    type: 'text',
    config: {
      control: {
        rules: {
          required: { value: true, message: 'This is required' },
          pattern: { value: /^[0-9]*$/, message: 'Must be a number' }
        },
        name: 'one',
        label: 'One'
      }
    }
  },
  {
    type: 'checkbox',
    config: {
      control: {
        gridProps: { xs: 12, md: 6 },
        name: 'isSignedUpForNewsletter',
        label: 'Sign up for our newsletter?'
      }
    }
  },
  {
    type: 'radio',
    config: {
      radioGroupProps: { row: true },
      options: [
        {
          label: 'Cody',
          value: 'cody'
        },
        {
          label: 'Rex',
          value: 'rex'
        }
      ],
      control: {
        gridProps: { xs: 12, md: 6 },
        name: 'favoriteCommander',
        label: 'Favorite Commander'
      }
    }
  },
  {
    type: 'select',
    config: {
      options: [
        {
          label: '501st',
          value: '501st'
        },
        {
          label: '212th',
          value: '212th'
        }
      ],
      control: {
        name: 'favoriteUnit',
        label: 'Favorite Unit'
      }
    }
  },
  {
    type: 'switch',
    config: {
      control: {
        gridProps: { xs: 12, md: 6 },
        name: 'isWifiOn',
        label: 'WiFi'
      }
    }
  },
  {
    type: 'checkbox',
    config: {
      helperText: 'Everyone loves ice cream',
      control: {
        gridProps: { xs: 12, md: 6 },
        name: 'doesWantIceCream',
        label: 'Do you want Ice Cream?'
      }
    }
  },
  {
    type: 'multiCheckbox',
    config: {
      helperText: 'Select all that apply',
      globalGridProps: { xs: 4 },
      options: [
        {
          label: 'Chocolate'
        },
        {
          label: 'Vanilla'
        },
        {
          label: 'Strawberry'
        },
        {
          label: 'Sherbert'
        },
        {
          label: 'Cookie Dough'
        },
        {
          label: 'Rocky Road'
        }
      ],
      control: {
        label: 'Options',
        name: 'options'
      }
    }
  },
  {
    type: 'manyOptionsSingleChoice',
    config: {
      globalGridProps: { xs: 6 },
      options: [
        {
          label: "Sorccer's Stone"
        },
        {
          label: 'Chamber of Secrets'
        },
        {
          label: 'Prizoner of Azkaban'
        },
        {
          label: 'Goblet of Fire'
        },
        {
          label: 'Order of the Phoenix'
        },
        {
          label: 'Half Blood Prince'
        },
        {
          label: 'Deathly Hallows'
        }
      ],
      control: {
        name: 'favoriteSeries',
        label: 'Favorite Series'
      }
    }
  }
  // {
  //   type: 'custom',
  //   config: {
  //     control: {
  //       name: 'startDate',
  //       children: props => <FormInputDate {...props} />
  //     }
  //   }
  // }
]

export const configAtom = atom({
  key: 'config',
  default: JSON.stringify(inputs, null, '  ')
})

export interface SomeObject {
  one: string
  two: string
  three: string
  favoriteCommander: string
  favoriteUnit: string
  isSignedUpForNewsletter: boolean
  startDate: Date
  doesWantIceCream: boolean
  isWifiOn: boolean
  options: string[]
  favoriteSeries: string
}
