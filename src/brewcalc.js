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

export const originalGravityPoints = ({
  fermentables,
  type,
  efficiency,
}: Recipe) => {
  const recipeType = type
  const recipeEfficiency = efficiency
  return sum(
    fermentables.map(({ type, potential, amount }) => {
      if (
        type === FermentableTypes.extract ||
        type === FermentableTypes.sugar ||
        type === FermentableTypes.dryExtract
      ) {
        return gravityPoints(potential, amount)
      } else {
        if (recipeType === RecipeTypes.extract) {
          return gravityPoints(potential, amount, options().stepingEfficiency)
        } else {
          return gravityPoints(potential, amount, recipeEfficiency)
        }
      }
    })
  )
}

export const finalGravityPoints = ({
  fermentables,
  yeasts,
  type,
  efficiency,
}: Recipe) => {
  // Correct attenuation
  const attenutation = 1.0 - apparentAttenutation({ yeasts })
  const sugAttenutation = -0.231 // Sugar attenuation factor
  const recipeType = type
  const recipeEfficiency = efficiency

  return sum(
    fermentables.map(({ type, potential, amount }) => {
      if (
        type === FermentableTypes.extract ||
        type === FermentableTypes.sugar ||
        type === FermentableTypes.dryExtract
      ) {
        if (type === FermentableTypes.sugar)
          return gravityPoints(potential, amount, sugAttenutation)
        else return gravityPoints(potential, amount, attenutation)
      } else {
        if (recipeType === RecipeTypes.extract)
          return gravityPoints(
            potential,
            amount,
            attenutation * options().stepingEfficiency
          )
        else
          return gravityPoints(
            potential,
            amount,
            attenutation * recipeEfficiency
          )
      }
    })
  )
}

//Sugar provides 46 gravity points per pound, per gallon (PPPG).
//1 pound = 16 oz (weight/mass)
//1 gallon = 128 fl oz
//yield and efficiency should be parsed from recipe as percent values

const gravityPoints = (potential, amount, efficiency = 1) => {
  return (potential - 1) * kilosToPounds(amount) * efficiency
}

const apparentAttenutation = ({ yeasts }) => {
  let apparentAttenutation = 0.73
  yeasts.map(yeast => {
    apparentAttenutation = yeast.attenuation
  })

  return apparentAttenutation
}
