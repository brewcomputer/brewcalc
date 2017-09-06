// @flow
import type { Recipe } from '../../types/recipe'
import { RecipeTypes } from '../../types/recipe'
import { FermentableTypes } from '../../types/fermentable'
import { HopForms, HopUse } from '../../types/hop'
import { YeastForms, YeastTypes } from '../../types/yeast'
import { MashType } from '../../types/mashStep'

export const recipeOne: Recipe = {
  name: 'Generic',
  brewer: 'BIABrewer.info',
  batchSize: 19.0028767,
  boilSize: 30.3767465,
  boilTime: 90,
  type: RecipeTypes.allGrain,
  efficiency: 0.7,
  fermentables: [
    {
      name: 'Pilsner (2 Row) Ger',
      addAfterBoil: false,
      amount: 3.2412931,
      color: 2,
      potential: 1.03726,
      yield: 81,
      type: FermentableTypes.grain
    }
  ],
  hops: [
    {
      name: 'Hallertauer',
      alpha: 0.048,
      amount: 0.0332677,
      form: HopForms.pellet,
      use: HopUse.boil,
      time: 60
    }
  ],
  mash: {
    grainTemp: 22.2,
    tunTemp: 22.2,
    equipAdjust: true,
    spargeTemp: 75.6,
    mashSteps: [
      {
        name: 'Saccharification',
        endTemp: 65.5555556,
        infuseAmount: 33.0186377,
        rampTime: 10,
        stepTemp: 65.5555556,
        stepTime: 90,
        type: MashType.infusion
      }
    ]
  },
  yeasts: [
    {
      name: 'German Ale',
      amount: 0.1242095,
      attenuation: 0.75,
      cultureDate: '14 Jun 2003',
      form: YeastForms.liquid,
      type: YeastTypes.ale
    }
  ]
}
