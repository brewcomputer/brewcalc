// @flow
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'

export const kgToOunces = (k: number) => k * 35.2739619

export const kgToPounds = (k: number) => kgToOunces(k) / 16

export const poundsTokg = (p: number) => p / 2.204

export const litersToOunces = (l: number) => l / 0.0295735

export const ouncesToLiters = (o: number) => o * 0.0295735

export const litersToGallons = (l: number) => litersToOunces(l) / 128

export const fahrenheitToCelsius = (f: number) => (f - 32) / 1.8

export const celsiusToFahrenheit = (c: number) => c * 1.8 + 32

export const kpaToPsi = (kpa: number) => kpa * 0.14503773773020923

export const psiTokpa = (psi: number) => psi * 6.894757293168361

export const sgToPlato = (sg: number) =>
  -668.962 + 1262.45 * sg - 776.43 * Math.pow(sg, 2) + 182.94 * Math.pow(sg, 3)

export const platoTosg = (e: number) => 1 + e / (258.6 - (e / 258.2) * 227.1)

export const srmToEbc = (srm: number) => srm * 1.97

export const ebcToSrm = (ebc: number) => ebc * 0.508

export const srmToLovibond = (srm: number) => (srm + 0.76) / 1.3546

export const lovibondToSrm = (lovibond: number) => 1.3546 * lovibond - 0.76

export const sum = (array: Array<number>) =>
  array.reduce((pv, cv) => pv + cv, 0)

const scaleIngredients = (scaleFactor: number, ingredients: any) =>
  ingredients.map(i => {
    return {
      ...i,
      amount: scaleFactor * i.amount
    }
  })

export const scaleRecipe = (r: Recipe, { batchSize }: Equipment) => {
  const scaleFactor: number = batchSize / r.batchSize

  return {
    ...r,
    batchSize: batchSize,
    fermentables: scaleIngredients(scaleFactor, r.fermentables),
    hops: scaleIngredients(scaleFactor, r.hops)
  }
}

export const capitalize = (str: string): string => {
  const words: Array<string> = str.split(' ')
  const capitalizedWords: Array<string> = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  )
  return capitalizedWords.join(' ')
}

export const isNotEmptyArray = (arr: ?Array<Object>): boolean => {
  if (Array.isArray(arr)) {
    return arr.length > 0
  }
  return false
}
