// @flow
import type { Equipment } from '../../types/equipment'
import type { Recipe } from '../../types/recipe'
import { RecipeTypes } from '../../types/recipe'
import { FermentableTypes } from '../../types/fermentable'
import { HopForms, HopUse } from '../../types/hop'
import { YeastForms, YeastTypes } from '../../types/yeast'
import { MashType } from '../../types/mashStep'

export const recipe: Recipe = {
  name: 'NRB\'s All Amarillo APA',
  type: RecipeTypes.allGrain,
  batchSize: 18.9271680,
  boilSize: 6.4447007,
  boilTime: 90.0000000,
  fermentables: [
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 4.9720548,
      color: 3.94,
      potential: 1.0363400,
      yield: 0.79
    },
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 0.9944110,
      color: 17.73,
      potential: 1.0368000,
      yield: 0.80
    },
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 0.4972055,
      color: 59.1,
      potential: 1.0345000,
      yield: 0.75
    }
  ],
  hops: [
    {
      alpha: 0.085,
      amount: 0.0217042,
      form: HopForms.pellet,
      time: 60,
      use: HopUse.boil
    },
    {
      alpha: 0.085,
      amount: 0.0277331,
      form: HopForms.pellet,
      time: 20,
      use: HopUse.boil
    },
    {
      alpha: 0.085,
      amount: 0.0313505,
      form: HopForms.pellet,
      time: 5,
      use: HopUse.boil
    }
  ],
  mash: {
    grainTemp: 22.2222222,
    mashSteps: [
      {
        name: 'Mash In',
        endTemp: 66.6666667,
        infuseAmount: 16.8569152,
        rampTime: 2,
        stepTemp: 66.6666667,
        stepTime: 60,
        type: MashType.infusion
      },
      {
        name: 'Mash Out',
        endTemp: 75.5555556,
        infuseAmount: 9.4398725,
        rampTime: 2,
        stepTemp: 75.5555556,
        stepTime: 10,
        type: MashType.infusion
      }
    ]
  },
  yeasts: [
    {
      amount: 0.0502753,
      attenuation: 0.765,
      cultureDate: '06 Mar 2011',
      form: YeastForms.dry,
      type: YeastTypes.ale
    }
  ]
}

export const equipment: Equipment = {
  efficiency: 0.68,
  name: 'Pot (18.5 Gal/70 L) and Cooler (9.5 Gal/40 L)  - All Grain',
  version: '1',
  boilSize: 37.1203164,
  batchSize: 23.0200000,
  tunVolume: 37.8500000,
  tunWeight: '4.0823280',
  tunSpecificHeat: '0.3000000',
  topUpWater: '0.0000000',
  trubChillerLoss: 2.8400000,
  evapRate: 0.182879483,
  boilTime: 90.0000000,
  calcBoilVolume: true,
  lauterDeadspace: 3.0300000,
  topUpKettle: 0.0000000,
  hopUtilization: '100.0000000',
  coolingLossPct: 0.04
}
