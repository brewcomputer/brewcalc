import { recipe as AussieAle } from './data/AussieAle'
import { recipe as MuddyPig } from './data/MuddyPig'

import { calcOriginalGravity, calcFinalGravity, calcBoilGravity } from '../src'

describe('Gravity', () => {
  test('Calc original gravity', () => {
    const AussieAleOG = calcOriginalGravity(
      AussieAle.batch_size,
      AussieAle.ingredients.fermentable_additions,
      AussieAle.efficiency
    )
    const MuddyPigOG = calcOriginalGravity(
      MuddyPig.batch_size,
      MuddyPig.ingredients.fermentable_additions,
      MuddyPig.efficiency
    )

    expect(AussieAleOG.value).toBeCloseTo(1.044, 3)
    expect(MuddyPigOG.value).toBeCloseTo(1.063, 3)
  })

  test('Calc final gravity', () => {
    const AussieAleFG = calcFinalGravity(
      AussieAle.batch_size,
      AussieAle.ingredients.fermentable_additions,
      AussieAle.efficiency,
      AussieAle.ingredients.culture_additions
    )
    expect(AussieAleFG.value).toBeCloseTo(1.008, 2)

    const MuddyPigFG = calcFinalGravity(
      MuddyPig.batch_size,
      MuddyPig.ingredients.fermentable_additions,
      MuddyPig.efficiency,
      MuddyPig.ingredients.culture_additions
    )
    expect(MuddyPigFG.value).toBeCloseTo(1.015, 2)
  })

  test('Calc boil gravity', () => {
    const AussieAleOG = calcOriginalGravity(
      AussieAle.batch_size,
      AussieAle.ingredients.fermentable_additions,
      AussieAle.efficiency
    )
    const AussieAleBG = calcBoilGravity(
      AussieAle.batch_size,
      AussieAle.boil.pre_boil_size,
      AussieAleOG
    )
    expect(AussieAleBG.value).toBeCloseTo(1.031, 2)

    const MuddyPigOG = calcOriginalGravity(
      MuddyPig.batch_size,
      MuddyPig.ingredients.fermentable_additions,
      MuddyPig.efficiency
    )
    const MuddyPigBG = calcBoilGravity(
      MuddyPig.batch_size,
      MuddyPig.boil.pre_boil_size,
      MuddyPigOG
    )
    expect(MuddyPigBG.value).toBeCloseTo(1.084, 2)
  })
})
