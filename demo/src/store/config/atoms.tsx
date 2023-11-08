import { atom } from 'recoil'
import { Config } from '@caldwell619/mantine-form-generator'

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
        name: 'one'
      },
      textInputProps: {
        label: 'One'
      }
    }
  },
  {
    type: 'checkbox',
    config: {
      control: {
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'isSignedUpForNewsletter'
      },
      checkboxProps: {
        label: 'Sign up for our newsletter?'
      }
    }
  },
  {
    type: 'radio',
    config: {
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
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'favoriteCommander'
      },
      radioGroupProps: {
        label: 'Favorite Commander'
      }
    }
  },
  {
    type: 'select',
    config: {
      control: {
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'favoriteUnit'
      },
      selectProps: {
        label: 'Favorite Unit - Select',
        data: [
          {
            label: '501st',
            value: '501st'
          },
          {
            label: '212th',
            value: '212th'
          }
        ]
      }
    }
  },
  {
    type: 'select',
    config: {
      control: {
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'favoriteUnit'
      },
      nativeSelectProps: {
        label: 'Favorite Unit - Native',
        data: [
          {
            label: '501st',
            value: '501st'
          },
          {
            label: '212th',
            value: '212th'
          }
        ]
      }
    }
  },
  {
    type: 'switch',
    config: {
      control: {
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'isWifiOn'
      },
      switchProps: {
        label: 'WiFi'
      }
    }
  },
  {
    type: 'checkbox',
    config: {
      control: {
        gridColProps: { span: { xs: 12, md: 6 } },
        name: 'doesWantIceCream'
      },
      checkboxProps: {
        label: 'Do you want Ice Cream?',
        description: 'Everyone loves ice cream'
      }
    }
  }
  // {
  //   type: 'multiCheckbox',
  //   config: {
  //     helperText: 'Select all that apply',
  //     globalGridProps: { xs: 4 },
  //     options: [
  //       {
  //         label: 'Chocolate'
  //       },
  //       {
  //         label: 'Vanilla'
  //       },
  //       {
  //         label: 'Strawberry'
  //       },
  //       {
  //         label: 'Sherbert'
  //       },
  //       {
  //         label: 'Cookie Dough'
  //       },
  //       {
  //         label: 'Rocky Road'
  //       }
  //     ],
  //     control: {
  //       label: 'Options',
  //       name: 'options'
  //     }
  //   }
  // },

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

export const resultAtom = atom({
  key: 'result',
  default: 'Submit the form to see the resulting output'
})

export type SomeObject = {
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
