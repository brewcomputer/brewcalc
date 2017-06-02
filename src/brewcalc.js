// @flow
import type { Recipe } from './types/recipe'
import { RecipeTypes } from './types/recipe'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import { litersToGallons, kilosToPounds, sum, options } from './utils.js'

export const originalGravity = (batchSize: number, ogPts: number) => {
  return 1.0 + ogPts / litersToGallons(batchSize)
}

export const finalGravity = (batchSize: number, fgPts: number) => {
  return 1.0 + fgPts / litersToGallons(batchSize)
}

export const boilGravity = (
  batchSize: number,
  boilSize: number,
  og: number
) => {
  return 1 + (og - 1) * litersToGallons(batchSize) / litersToGallons(boilSize)
}

export const originalGravityPoints = (
  {
    fermentables,
    type
  }: Recipe,
  equipmentEfficiency: number
) => {
  const recipeType = type
  return sum(
    fermentables.map(({ type, potential, amount }) => {
      return gravityPoints(
        potential,
        amount,
        fermentableEfficiency(type, recipeType, equipmentEfficiency)
      )
    })
  )
}

export const finalGravityPoints = (
  {
    fermentables,
    yeasts,
    type
  }: Recipe,
  equipmentEfficiency: number
) => {
  const attenutation = 1.0 - yeasts.shift().attenuation
  const recipeType = type

  return sum(
    fermentables.map(({ type, potential, amount }) => {
      return gravityPoints(
        potential,
        amount,
        attenutation *
          fermentableEfficiency(type, recipeType, equipmentEfficiency)
      )
    })
  )
}

const fermentableEfficiency = (
  fermentableType,
  recipeType,
  equipmentEfficiency
) => {
  const sugarEfficiency = 1
  const steepingEfficiency = 0.15
  return fermentableType === FermentableTypes.extract ||
    fermentableType === FermentableTypes.sugar ||
    fermentableType === FermentableTypes.dryExtract
    ? sugarEfficiency
    : recipeType === RecipeTypes.extract
        ? steepingEfficiency
        : equipmentEfficiency
}

//Sugar provides 46 gravity points per pound, per gallon (PPPG).
//1 pound = 16 oz (weight/mass)
//1 gallon = 128 fl oz
//yield and efficiency should be parsed from recipe as percent values
//The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

const gravityPoints = (potential, amount, efficiency = 1) => {
  return (potential - 1) * kilosToPounds(amount) * efficiency
}
