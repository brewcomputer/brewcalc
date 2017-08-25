// @flow
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import {
  litersToGallons,
  kgToPounds,
  poundsTokg,
  sgToPlato,
  sum,
  celsiusToFahrenheit
} from './utils.js'
import type { Yeast } from './types/yeast'
import { YeastForms } from './types/yeast'

export const originalGravity = (batchSize: number, ogPts: number) =>
  1.0 + ogPts / litersToGallons(batchSize)

export const finalGravity = (batchSize: number, fgPts: number) =>
  1.0 + fgPts / litersToGallons(batchSize)

export const boilGravity = (batchSize: number, boilSize: number, og: number) =>
  1 + (og - 1) * litersToGallons(batchSize) / litersToGallons(boilSize)

// Sugar provides 46 gravity points per pound, per gallon (PPPG).
// 1 pound = 16 oz (weight/mass)
// 1 gallon = 128 fl oz
// yield and efficiency should be parsed from recipe as percent values
// The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

const fermentableGravityPoints = (potential, amount, efficiency = 1) =>
  (potential - 1) * kgToPounds(amount) * efficiency

const fermentableEfficiency = (
  type,
  equipmentEfficiency,
  sugarEfficiency = 1
) =>
  type === FermentableTypes.extract ||
    type === FermentableTypes.sugar ||
    type === FermentableTypes.dryExtract ?
    sugarEfficiency :
    equipmentEfficiency

export const gravityPoints = (
  fermentables: Array<Fermentable>,
  efficiency: number,
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

// http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132
export const estABW = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.105
export const estABV = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.132

// http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/
export const estABVrealExtract = (og: number, fg: number) => {
  const oe = sgToPlato(og)
  const ae = sgToPlato(fg)
  const re = 0.1808 * oe + 0.8192 * ae
  const abw = (oe - re) / (2.0665 - 0.010665 * oe)
  const abv = abw * (fg / 0.79661)

  return abv
}

// MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
const mcu2srm = mcu => 1.4922 * Math.pow(mcu, 0.6859)

const calcMCU = ({ amount, color }: Fermentable) => kgToPounds(amount) * color

export const srmToRgb = (srm: number) => ({
  r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
  g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
  b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
})
export const colorSRM = (fermentables: Array<Fermentable>, postBoilVolime: number) =>
  mcu2srm(sum(fermentables.map(calcMCU)) / litersToGallons(postBoilVolime))

export const srmToCss = (srm: number) => {
  const color = srmToRgb(srm)

  return `rgb(${color.r}, ${color.g}, ${color.b})`
}

// https://www.brewersfriend.com/yeast-pitch-rate-and-starter-calculator/

// million cells / ml / degree Plato

// Minimum manufacturer's recommendation: 0.35 (ale only, fresh yeast only)
// Middle of the road Pro Brewer 0.75 (ale)
// Pro Brewer 1.00 (high gravity ale)
// Pro Brewer 1.50 (minimum for lager)
// Pro Brewer 2.0 (high gravity lager)

// cellDensity = billion cells / gram
// Safale K-97	14
// Safale S-04	8
// Safbrew T-58	18
// Safbrew S-33	16
// Saflager S-23	10
// Saflager S-189	9

// A pack/vial contains 100 billion cells at the date of manufacture.
// Liquid yeast viability drops 21% each month, or 0.7% each day, from the date of manufacture.
// The assumption is the yeast viability drops in a linear fashion. In 4.75 months or 143 days, this calculator assumes the yeast is 100% dead (100 / 0.7 = ~143).

// million 10 ^ 6
// billion 10 ^ 9

export const yeastNeeded = (pitchRate: number, batchSize: number, e: number) =>
  pitchRate * (batchSize * 1000) * e / 1000

const viability = (currentDate: string, cultureDate: string) =>
  100 -
  Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) *
  0.7

const NotImplementedException = () => {
  this.message = 'I dont know how to calculate Culture yeasts yet'
  this.name = 'NotImplementedError'
}

export const yeastCount = (
  { amount, form, cultureDate }: Yeast,
  currentDate: string = new Date().toString(),
  cellDensity: number = 8,
  // billion cells / ml
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
      throw NotImplementedException()
  }
}

const yeastGrowth = ratio => 2.33 - 0.67 * ratio

const growthRateCurveBraukaiserStir = (ratio: number) =>
  ratio < 1.4 ?
    1.4 :
    ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0 ?
      yeastGrowth(ratio) :
      0

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

// https://byo.com/yeast/item/164-balancing-your-draft-system-advanced-brewing
const kegPressure = (carbVolume: number, t: number) =>
  Math.max(
    0,
    -16.6999 -
    0.0101059 * t +
    0.00116512 * t * t +
    0.173354 * t * carbVolume +
    4.24267 * carbVolume -
    0.0684226 * carbVolume * carbVolume
  )

// http://www.homebrewtalk.com/showthread.php?t=441383
const primingSugar = (carbVolume, t, batchSize) =>
  15.195 *
  batchSize *
  (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t)

const normalizeTemp = (t: number) => Math.max(32.0, celsiusToFahrenheit(t))

export const carbonation = (
  carbVolume: number,
  t: number,
  batchSize: number
) => {
  const sugar = primingSugar(
    carbVolume,
    normalizeTemp(t),
    litersToGallons(batchSize)
  )

  return {
    kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
    kegSugar: sugar * 0.5,
    cornSugar: sugar,
    dme: sugar * 1.538
  }
}

// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs

const caloriesAlc = (og, fg) => 1881.22 * fg * ((og - fg) / (1.775 - og))
const caloriesExt = (og, fg) =>
  3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004)

export const calcCalories = (og: number, fg: number) =>
  caloriesAlc(og, fg) + caloriesExt(og, fg)
