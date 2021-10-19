import { litersToGallons, poundsTokg, sgToPlato } from './utils'
import type { Yeast } from './types/yeast'
import { YeastForms } from './types/yeast'

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
  (pitchRate * (batchSize * 1000) * e) / 1000

const viability = (
  currentDate: string,
  cultureDate: string = new Date().toString()
) =>
  100 -
  Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) *
    0.7

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
      throw new Error('NotImplementedError')
  }
}

const yeastGrowth = (ratio) => 2.33 - 0.67 * ratio

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
  const pitchRate =
    (endingCount * 1000) / sgToPlato(gravity) / (batchSize / 1000)

  return {
    growthRate: growthRate,
    endingCount: endingCount,
    pitchRate: pitchRate,
  }
}
