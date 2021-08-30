import {
  bitternessIbuTinseth,
  bitternessRatio,
  bitternessIbuRager,
} from '../src'
import { calcBoilGravity, calcOriginalGravity } from '../src'
import { recipe as AussieAle } from './data/AussieAle'
import { recipe as MuddyPig } from './data/MuddyPig'
import TestRecipe from './data/TestRecipeConverted'
import Equipment from './data/TestEquipment'

import { GravityType, VolumeType } from '../types/beerjson'

const calcRecipeBoilGravity = (recipe) =>
  calcBoilGravity(
    recipe.batch_size,
    recipe.boil.pre_boil_size,
    calcOriginalGravity(
      recipe.batch_size,
      recipe.ingredients.fermentable_additions,
      recipe.efficiency
    )
  )

const calcPostBoilVolume = (recipe, equipment): VolumeType => ({
  value:
    recipe.boil.pre_boil_size.value -
    (equipment.boil_rate_per_hour.value * recipe.boil.boil_time.value) / 60,
  unit: 'gal',
})

test('Calc bitterness by Tinseth', () => {
  const ibu = bitternessIbuTinseth(
    TestRecipe.ingredients.hop_additions,
    calcRecipeBoilGravity(TestRecipe),
    calcPostBoilVolume(TestRecipe, Equipment)
  )

  expect(ibu.value).toBeCloseTo(22, 0)
  expect(ibu.unit).toEqual('IBUs')
})

test('Calc bitterness ratio', () => {
  const og = calcOriginalGravity(
    TestRecipe.batch_size,
    TestRecipe.ingredients.fermentable_additions,
    TestRecipe.efficiency
  )

  const ibu = bitternessIbuTinseth(
    TestRecipe.ingredients.hop_additions,
    calcRecipeBoilGravity(TestRecipe),
    calcPostBoilVolume(TestRecipe, Equipment)
  )

  const gu = (og.value - 1) * 1000

  expect(bitternessRatio(ibu.value, gu)).toBeCloseTo(0.64, 0)
})

test('Calc bitterness by Rager', () => {
  const ibu = bitternessIbuRager(
    TestRecipe.ingredients.hop_additions,
    calcRecipeBoilGravity(TestRecipe),
    calcPostBoilVolume(TestRecipe, Equipment)
  )

  expect(ibu.value).toBeCloseTo(25, 0)
  expect(ibu.unit).toEqual('IBUs')
})

test('Calc bitterness by Rager: sgb > 1.05', () => {
  const boilGravity: GravityType = { value: 1.06, unit: 'sg' }
  const ibu = bitternessIbuRager(
    TestRecipe.ingredients.hop_additions,
    boilGravity,
    calcPostBoilVolume(TestRecipe, Equipment)
  )
  expect(ibu.value).toBeCloseTo(24, 0)
})

test.skip('bitternessIbuTinseth: old', () => {
  const AussieAleIBU = bitternessIbuTinseth(
    AussieAle.ingredients.hop_additions,
    calcRecipeBoilGravity(AussieAle),
    AussieAle.batch_size
  )

  expect(AussieAleIBU.value).toBeCloseTo(28, 0)
  expect(AussieAleIBU.unit).toEqual('IBUs')

  const MuddyPigIBU = bitternessIbuTinseth(
    MuddyPig.ingredients.hop_additions,
    calcRecipeBoilGravity(MuddyPig),
    MuddyPig.batch_size
  )

  expect(MuddyPigIBU.value).toBeCloseTo(31.7, 0)
  expect(MuddyPigIBU.unit).toEqual('IBUs')
})

test.skip('bitternessRatio: old', () => {
  const ibu = bitternessIbuTinseth(
    AussieAle.ingredients.hop_additions,
    calcRecipeBoilGravity(AussieAle),
    AussieAle.batch_size
  )

  const gu = (AussieAle.original_gravity.value - 1) * 1000

  expect(bitternessRatio(ibu.value, gu)).toBeCloseTo(0.64, 2)
})

//TODO: Rager IBU calc test
/*test('bitternessIbuRager: old', () => {
    const ibu = bitternessIbuRager(
        TestRecipe.ingredients.hop_additions,
        calcRecipeBoilGravity(Recipe),
        calcPostBoilVolume(Recipe, Equipment)
    )

    expect(ibu.value).toBeCloseTo(25, 0)
    expect(ibu.unit).toEqual('IBUs')
})

test('bitternessIbuRager when sgb > 1.05', () => {
    const boilGravity = { value: 1.06, unit: 'sg' }
    const ibu = bitternessIbuRager(
        TestRecipe.ingredients.hop_additions,
        boilGravity,
        calcPostBoilVolume(Recipe, Equipment)
    )
    expect(ibu.value).toBeCloseTo(24, 0)
})*/
