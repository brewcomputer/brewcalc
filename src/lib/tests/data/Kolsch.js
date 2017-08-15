// @flow
import type { Equipment } from '../../types/equipment'
import type { Recipe } from '../../types/recipe'
import type { Specifications } from '../../types/specifications'

import { RecipeTypes } from '../../types/recipe'
import { FermentableTypes } from '../../types/fermentable'
import { HopForms, HopUse } from '../../types/hop'
import { YeastForms, YeastTypes } from '../../types/yeast'
import { MashType } from '../../types/mashStep'

export const recipe: Recipe = {
  name: 'Lloyd&#39;s Krispy Kolsch',
  batchSize: 19.0028767,
  boilSize: 30.3767465,
  boilTime: 90,
  type: RecipeTypes.allGrain,
  fermentables: [
    {
      name: 'Pilsner (2 Row) Ger',
      addAfterBoil: false,
      amount: 3.2412931,
      color: 2,
      potential: 1.0372600,
      type: FermentableTypes.grain
    },
    {
      name: 'Vienna Malt',
      addAfterBoil: false,
      amount: 0.8640194,
      color: 3.4974619,
      potential: 1.0358800,
      type: FermentableTypes.grain
    },
    {
      name: 'Cara-Pils/Dextrine',
      addAfterBoil: false,
      amount: 0.2164116,
      color: 2,
      potential: 1.0331200,
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
    },
    {
      name: 'Hallertauer',
      alpha: 0.048,
      amount: 0.0166339,
      form: HopForms.pellet,
      use: HopUse.boil,
      time: 20
    }
  ],
  mash: {
    grainTemp: 22.2,
    tunTemp: 22.2,
    equipAdjust: true,
    mashSteps: [
      {
        name: 'Saccharification',
        endTemp: 65.5555556,
        infuseAmount: 33.0186377,
        rampTime: 10,
        stepTemp: 65.5555556,
        stepTime: 90,
        type: MashType.infusion
      },
      {
        name: 'Mash Out',
        endTemp: 75.5555556,
        infuseAmount: 0,
        rampTime: 7,
        stepTemp: 75.5555556,
        stepTime: 10,
        type: MashType.temperature
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
export const equipment: Equipment = {
  name: 'Electric Urn (10 Gal/40 L) - BIAB',
  batchSize: 19.0028767,
  boilSize: 30.3767465,
  tunWeight: 4.4996363,
  tunVolume: 0.3,
  tunSpecificHeat: 0.3,
  coolingLossPct: 0.04,
  efficiency: 0.7,
  evapRate: 0.159771335,
  lauterDeadspace: 0,
  topUpKettle: 0,
  trubChillerLoss: 3.17,
  BIAB: true
}

export const specifications: Specifications = {
  og: 1.0490000,
  fg: 1.0100000,
  abv: 0.051,
  color: 3.7,
  ibu: 27.0,
  ibuMethod: 'Tinseth',
  calories: 455.8
}
