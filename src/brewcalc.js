// @flow
import type { Recipe } from './types/recipe'
import { RecipeTypes } from './types/recipe'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import {
  litersToGallons,
  kgToPounds,
  kgToOunces,
  litersToOunces,
  poundsTokg,
  sgToPlato,
  sum
} from './utils.js'
import type { Equipment } from './types/equipment'
import type { Hop } from './types/hop'
import { HopForms } from './types/hop'

import type { Yeast } from './types/yeast'
import { YeastTypes, YeastForms } from './types/yeast'

export const originalGravity = (batchSize: number, ogPts: number) =>
  1.0 + ogPts / litersToGallons(batchSize)

export const finalGravity = (batchSize: number, fgPts: number) =>
  1.0 + fgPts / litersToGallons(batchSize)

export const boilGravity = (batchSize: number, boilSize: number, og: number) =>
  1 + (og - 1) * litersToGallons(batchSize) / litersToGallons(boilSize)

export const gravityPoints = (
  {
    fermentables
  }: Recipe,
  {
    efficiency
  }: Equipment,
  attenutation: number = 0
) =>
  sum(
    fermentables.map(({ type, potential, amount }) =>
      fermentableGravityPoints(
        potential,
        amount,
        (1 - attenutation) * fermentableEfficiency(type, efficiency)
      ))
  )

const fermentableEfficiency = (
  type,
  equipmentEfficiency,
  sugarEfficiency = 1
) =>
  type === FermentableTypes.extract ||
    type === FermentableTypes.sugar ||
    type === FermentableTypes.dryExtract
    ? sugarEfficiency
    : equipmentEfficiency

//Sugar provides 46 gravity points per pound, per gallon (PPPG).
//1 pound = 16 oz (weight/mass)
//1 gallon = 128 fl oz
//yield and efficiency should be parsed from recipe as percent values
//The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

const fermentableGravityPoints = (potential, amount, efficiency = 1) =>
  (potential - 1) * kgToPounds(amount) * efficiency

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
        kgToOunces(amount) *
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

//MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
const mcu2srm = mcu => 1.4922 * Math.pow(mcu, 0.6859)

const calcMCU = ({ amount, color }: Fermentable) => kgToPounds(amount) * color

export const srmToRgb = (srm: number) => ({
  r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
  g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
  b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
})
export const colorSRM = ({ fermentables }: Recipe, postBoilVolime: number) =>
  mcu2srm(sum(fermentables.map(calcMCU)) / litersToGallons(postBoilVolime))

//https://www.brewersfriend.com/yeast-pitch-rate-and-starter-calculator/

//million cells / ml / degree Plato

//Minimum manufacturer's recommendation: 0.35 (ale only, fresh yeast only)
//Middle of the road Pro Brewer 0.75 (ale)
//Pro Brewer 1.00 (high gravity ale)
//Pro Brewer 1.50 (minimum for lager)
//Pro Brewer 2.0 (high gravity lager)

//cellDensity = billion cells / gram
//Safale K-97	14
//Safale S-04	8
//Safbrew T-58	18
//Safbrew S-33	16
//Saflager S-23	10
//Saflager S-189	9

//A pack/vial contains 100 billion cells at the date of manufacture.
//Liquid yeast viability drops 21% each month, or 0.7% each day, from the date of manufacture.
//The assumption is the yeast viability drops in a linear fashion. In 4.75 months or 143 days, this calculator assumes the yeast is 100% dead (100 / 0.7 = ~143).

//million 10 ^ 6
//billion 10 ^ 9

export const yeastNeeded = (pitchRate: number, batchSize: number, e: number) =>
  pitchRate * (batchSize * 1000) * e / 1000

const viability = (currentDate: string, cultureDate: string) =>
  100 -
  Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) *
    0.7

export const yeastCount = (
  { amount, form, cultureDate }: Yeast,
  currentDate: string = new Date().toString(),
  cellDensity: number = 8,
  //billion cells / ml
  slurryDensity: number = 1
) => {
  switch (form) {
    case YeastForms.dry:
      return cellDensity * amount * 1000
    case YeastForms.liquid:
      return 100 * (viability(currentDate, cultureDate) / 100) * amount
    case YeastForms.slant:
      return slurryDensity * amount * 1000
    default:
      throw {
        name: 'NotImplementedError',
        message: 'I dont know how to calculate Culture yeasts yet'
      }
  }
}

const yeastGrowth = ratio => 2.33 - 0.67 * ratio

const growthRateCurveBraukaiserStir = (ratio: number) =>
  ratio < 1.4
    ? 1.4
    : ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0
        ? yeastGrowth(ratio)
        : 0

export const yeastStarterGrow = (
  startingYeastCount: number,
  starterSize: number,
  gravity: number,
  batchSize: number
) => {
  const volumeLevel = litersToGallons(starterSize)
  const pointsNeeded = volumeLevel * (gravity - 1) * 1000
  const poundsDME = pointsNeeded / 42
  const gramsDME = poundsTokg(poundsDME) * 1000
  const cellsToGramsRatio = startingYeastCount / gramsDME

  const growthRate = growthRateCurveBraukaiserStir(cellsToGramsRatio)
  const endingCount = gramsDME * growthRate + startingYeastCount
  const pitchRate = endingCount *
    1000 /
    sgToPlato(gravity) /
    (batchSize / 1000)

  return {
    growthRate: growthRate,
    endingCount: endingCount,
    pitchRate: pitchRate
  }
}
