// @flow
import type { Equipment } from '../../types/equipment'
import type { Recipe } from '../../types/recipe'
import { RecipeTypes } from '../../types/recipe'
import { FermentableTypes } from '../../types/fermentable'

export const recipe: Recipe = {
  name: 'NRB\'s All Amarillo APA',
  type: RecipeTypes.allGrain,
  batchSize: 18.9271680,
  boilSize: 6.4447007,
  boilTime: 60.0000000,
  fermentables: [
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 4.9720548,
      color: 2,
      potential: 1.0363400,
      yield: 0.79
    },
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 0.9944110,
      color: 9,
      potential: 1.0368000,
      yield: 0.80
    },
    {
      type: FermentableTypes.grain,
      addAfterBoil: false,
      amount: 0.4972055,
      color: 30,
      potential: 1.0345000,
      yield: 0.75
    }
  ],
  hops: [],
  mash: {
    grainTemp: 22.2222222,
    mashSteps: []
  },
  yeasts: []
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
