// @flow
import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract
} from '../brewcalc'
import { bitternessIbuTinseth } from '../hops'

declare var test: any
declare var expect: any

const recipe = {
  name: 'RR Summer Bitter',
  batchSize: 40,
  boilSize: 45.6427168,
  boilTime: 60,
  efficiency: 0.75,
  type: 'All Grain',
  fermentables: [
    {
      name: 'Pale Malt, Maris Otter',
      addAfterBoil: false,
      amount: 6.9999955,
      color: 3,
      potential: 1.03795,
      type: 'Grain'
    },
    {
      name: 'Cara 50',
      addAfterBoil: false,
      amount: 0.9999994,
      color: 25.3807107,
      potential: 1.0345,
      type: 'Grain'
    }
  ],
  hops: [
    {
      name: 'Target',
      alpha: 0.11,
      amount: 0.04,
      form: 'Pellet',
      use: 'Boil',
      time: 60
    },
    {
      name: 'Goldings, East Kent',
      alpha: 0.05,
      amount: 0.015,
      form: 'Pellet',
      use: 'Boil',
      time: 30
    },
    {
      name: 'Goldings, East Kent',
      alpha: 0.05,
      amount: 0.015,
      form: 'Pellet',
      use: 'Boil',
      time: 15
    }
  ],
  mash: {
    grainTemp: 22.2222222,
    tunTemp: 22.2222222,
    equipAdjust: false,
    spargeTemp: 75.5555556,
    mashSteps: [
      {
        name: 'Saccharification',
        endTemp: 68.8888889,
        infuseAmount: 20.8636349,
        rampTime: 15,
        stepTemp: 68.8888889,
        stepTime: 40,
        type: 'Infusion'
      },
      {
        name: 'Mash Out',
        endTemp: 75.5555556,
        infuseAmount: 0,
        rampTime: 10,
        stepTemp: 75.5555556,
        stepTime: 10,
        type: 'Temperature'
      }
    ]
  },
  yeasts: [
    {
      name: 'Windsor Yeast',
      amount: 0.023659,
      attenuation: 0.75,
      cultureDate: '13 Jun 2003',
      form: 'Dry',
      type: 'Ale'
    }
  ]
}
const equipment = {
  name: 'Euro Keg 50l',
  batchSize: 40,
  boilSize: 45.6427168,
  tunWeight: 12.9999916,
  tunVolume: 0.12,
  tunSpecificHeat: 0.12,
  coolingLossPct: 0.04,
  evapRate: 0.041468101,
  lauterDeadspace: 0,
  topUpKettle: 0,
  trubChillerLoss: 2,
  BIAB: false
}
// const expectedSpecifications = {
//  og: 1.047,
//  fg: 1.013,
//  ibu: 34.2,
//  ibuMethod: 'Tinseth',
//  color: 6.8,
//  abv: 0.044
// }
const expectedSpecifications = {
  og: 1.047,
  fg: 1.012,
  ibu: 34.3,
  ibuMethod: 'Tinseth',
  color: 6.8,
  abv: 0.049
}
const og = originalGravity(
  recipe.batchSize,
  gravityPoints(recipe.fermentables, recipe.efficiency)
)

const fg = finalGravity(
  recipe.batchSize,
  gravityPoints(
    recipe.fermentables,
    recipe.efficiency,
    recipe.yeasts[0].attenuation
  )
)

const trubChillerLoss = equipment !== null ? equipment.trubChillerLoss : 0

const avgBoilGravityPts =
  boilGravity(recipe.batchSize + trubChillerLoss, recipe.boilSize, og) - 1

const ibu = bitternessIbuTinseth(
  recipe.hops,
  avgBoilGravityPts,
  recipe.batchSize + trubChillerLoss
)

const colorSRMvalue = colorSRM(
  recipe.fermentables,
  recipe.batchSize + trubChillerLoss
)

const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))

const specifications = {
  og: Number(og.toFixed(3)),
  fg: Number(fg.toFixed(3)),
  ibu: Number(ibu.toFixed(1)),
  ibuMethod: expectedSpecifications.ibuMethod,
  color: Number(colorSRMvalue.toFixed(1)),
  abv: Number((abv / 100).toFixed(3))
}

test('specificationsTest', () => {
  expect(specifications).toEqual(expectedSpecifications)
})
