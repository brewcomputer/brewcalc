// @flow
import type { Recipe } from './types/recipe'
import { RecipeTypes } from './types/recipe'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import {
  litersToGallons,
  kilosToPounds,
  celsiusToFahrenheit,
  sum,
  options,
} from './utils.js'

import { fermentableTypes, mashType } from './enums.js'

export const estimateOriginalGravity = (recipe: Recipe) => {
  const batchSize = recipeBatchSize(recipe)
  if (batchSize <= 0) return 1
  return 1.0 + originalGravityPoints(recipe) / batchSize / 1000.0
}

export const estimateFinalGravity = (recipe: Recipe) => {
  const batchSize = recipeBatchSize(recipe)
  if (batchSize <= 0) return 1
  return 1.0 + totalFinalGravityPoints(recipe) / batchSize / 1000.0
}

export const getBoilGravity = (recipe: Recipe) => {
  const mGPs = estimateOriginalGravity(recipe) - 1 //milliGPs
  return (
    1 +
    mGPs * litersToGallons(recipe.batchSize) / litersToGallons(recipe.boilSize)
  )
}

const recipeBatchSize = recipe => {
  if (typeof recipe === 'undefined' || recipe === null) return 0
  let batchSize = litersToGallons(recipe.equipment.batchSize)
  if (recipe.type == RecipeTypes.extract) {
    batchSize += batchSize * options().trubLossPercent
  }
  return batchSize
}

const originalGravityPoints = recipe => {
  return sum(
    recipe.fermentables.map(fermentable => {
      if (
        fermentable.type === FermentableTypes.extract ||
        fermentable.type === FermentableTypes.sugar ||
        fermentable.type === FermentableTypes.dryExtract
      ) {
        return gravityPoints(fermentable.yield, fermentable.amount)
      } else {
        if (recipe.type === RecipeTypes.extract) {
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            options().stepingEfficiency
          )
        } else {
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            recipe.efficiency
          )
        }
      }
    })
  )
}

//Sugar provides 46 gravity points per pound, per gallon (PPPG).
//1 pound = 16 oz (weight/mass)
//1 gallon = 128 fl oz
//yield and efficiency should be parsed from recipe as percent values

const gravityPoints = (y, amount, efficiency = 1) => {
  return 46.0 * y * kilosToPounds(amount) * efficiency
}

const apparentAttenutation = recipe => {
  let apparentAttenutation = 0.73

  recipe.yeasts.map(yeast => {
    if (!yeast.addAfterBoil) {
      apparentAttenutation = yeast.attenuation
    }
  })

  return apparentAttenutation
}

const totalFinalGravityPoints = recipe => {
  // Correct attenuation
  var attenutation = 1.0 - apparentAttenutation(recipe)
  var sugAttenutation = -0.231 // Sugar attenuation factor

  return sum(
    recipe.fermentables.map(fermentable => {
      if (
        fermentable.type === FermentableTypes.extract ||
        fermentable.type === FermentableTypes.sugar ||
        fermentable.type === FermentableTypes.dryExtract
      ) {
        if (fermentable.type === FermentableTypes.sugar)
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            sugAttenutation
          )
        else
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            attenutation
          )
      } else {
        if (recipe.type === RecipeTypes.extract)
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            attenutation * options().stepingEfficiency
          )
        else
          return gravityPoints(
            fermentable.yield,
            fermentable.amount,
            attenutation * recipe.efficiency
          )
      }
    })
  )
}
