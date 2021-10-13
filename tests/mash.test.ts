import { recipe } from './data/AussieAle'
import {
  calcMashGrainWeight,
  convertMeasurableValue,
  recalculateMashSteps,
} from '../src'

describe('Mash steps calculation', () => {
  test('Calc mash grain weight', () => {
    const mashGrainWeight = calcMashGrainWeight(
      recipe.ingredients.fermentable_additions
    )
    expect(convertMeasurableValue(mashGrainWeight, 'kg')).toBeCloseTo(5.26, 2)
    expect(mashGrainWeight.unit).toEqual('lb')
  })

  test.skip('Recalc Mash Steps', () => {
    const mashGrainWeight = calcMashGrainWeight(
      recipe.ingredients.fermentable_additions
    )
    const mashSteps = recalculateMashSteps(
      recipe.mash.mash_steps,
      recipe.mash.grain_temperature,
      mashGrainWeight
    )
  })
})
