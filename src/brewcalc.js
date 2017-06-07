// @flow
import type { Recipe } from './types/recipe'
import { RecipeTypes } from './types/recipe'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import {
  litersToGallons,
  kilosToPounds,
  kilosToOunces,
  litersToOunces,
  sum,
  options
} from './utils.js'
import type { Equipment } from './types/equipment'
import type { Hop } from './types/hop'
import { HopForms } from './types/hop'

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
  {
    efficiency
  }: Equipment
) => {
  const recipeType = type
  return sum(
    fermentables.map(({ type, potential, amount }) => {
      return gravityPoints(
        potential,
        amount,
        fermentableEfficiency(type, recipeType, efficiency)
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
  {
    efficiency
  }: Equipment
) => {
  const attenutation = 1.0 - yeasts[0].attenuation
  const recipeType = type

  return sum(
    fermentables.map(({ type, potential, amount }) => {
      return gravityPoints(
        potential,
        amount,
        attenutation * fermentableEfficiency(type, recipeType, efficiency)
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

const ibuUtilization = (
  avgBoilGravityPts: number,
  boilTime: number,
  pelletFactor: number
) =>
  pelletFactor *
  1.65 *
  Math.pow(0.000125, avgBoilGravityPts) *
  (1 - Math.pow(Math.E, -0.04 * boilTime)) /
  4.15

//Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
//IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
//U = bigness factor * boil time factor

export const bitternessIBU = (
  { hops }: Recipe,
  avgBoilGravityPts: number,
  postBoilVolume: number
) =>
  sum(
    hops.map(
      ({ amount, alpha, form, time }) =>
        ibuUtilization(
          avgBoilGravityPts,
          time,
          form === HopForms.pellet ? 1.1 : 1
        ) *
        kilosToOunces(amount) *
        alpha *
        7490 /
        litersToGallons(postBoilVolume)
    )
  )

//The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
//The Gravity Units are the decimal portion of the original gravity
export const bitternessRatio = (ibu: number, gu: number) => ibu / gu

//http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
//ABW = (OG points - FG points) * 0.105
//ABV = (OG points - FG points) * 0.132
export const estABW = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.105
export const estABV = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.132
