import {
  litersToGallons,
  kilosToPounds,
  celsiusToFahrenheit,
  sum,
  getPpg,
  isUnfermentable,
  getEfficiency,
  options,
} from './utils.js'

import { recipeTypes, fermentableTypes, mashType } from './enums.js'

export const estimateOriginalGravity = recipe => {
  if (typeof recipe === 'undefined' || recipe === null) return 1
  const batchSize = recipeBatchSize(recipe)
  if (batchSize <= 0) return 1

  const originalGravity = sum(
    recipe.fermentables.map(fermentable => {
      if (
        fermentable.type === fermentableTypes.extract ||
        fermentable.type === fermentableTypes.sugar ||
        fermentable.type === fermentableTypes.dryExtract
      ) {
        return gravityPoints(fermentable.yield, fermentable.amount)
      } else {
        if (recipe.type === recipeTypes.extract) {
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
  return 1.0 + originalGravity / batchSize / 1000.0
}

export const estimateFinalGravity = recipe => {
  if (typeof recipe === 'undefined' || recipe === null) return 1
  const batchSize = recipeBatchSize(recipe)
  if (batchSize <= 0) return 1

  return 1.0 + totalFGPoints(recipe) / batchSize / 1000.0
}

export const getBoilGravity = recipe => {
  if (recipe.type == recipeTypes.extract) {
    return extractBoilGravity(recipe)
  } else {
    return allGrainBoilGravity(recipe)
  }
}

const recipeBatchSize = recipe => {
  let batchSize = litersToGallons(recipe.equipment.batchSize)
  if (recipe.type == recipeTypes.extract) {
    //TODO
    //batchSize + TrubLoss size
  }
  return batchSize
}

const extractBoilGravity = recipe => {
  const mGPs = estimateOriginalGravity(recipe) - 1 //milliGPs
  return (
    1 +
    mGPs *
      litersToGallons(recipe.batchSize) /
      litersToGallons(recipe.boilSize) *
      (avgBoilTime(recipe) / recipe.boilTime)
  )
}

const allGrainBoilGravity = recipe => {
  let mGPs = estimateOriginalGravity(recipe) - 1
  return (
    1 +
    mGPs * litersToGallons(recipe.batchSize) / litersToGallons(recipe.boilSize)
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

const totalFGPoints = recipe => {
  // Correct attenuation
  var attenutation = 1.0 - apparentAttenutation(recipe)
  var sugAttenutation = -0.231 // Sugar attenuation factor

  return sum(
    recipe.fermentables.map(fermentable => {
      if (
        fermentable.type === fermentableTypes.extract ||
        fermentable.type === fermentableTypes.sugar ||
        fermentable.type === fermentableTypes.dryExtract
      ) {
        if (fermentable.type === fermentableTypes.sugar)
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
        if (recipe.type === recipeTypes.extract)
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

const avgBoilTime = recipe => {
  let avgBoilTime = 0
  let t = 0

  recipe.fermentables.map(fermentable => {
    if (!fermentable.type == fermentableTypes.grain) {
      t++
      avgBoilTime += fermentable.time
    }
  })
  if (t != 0) {
    avgBoilTime = avgBoilTime / t
  } else {
    avgBoilTime = recipe.boilTime
  }

  return avgBoilTime
}
