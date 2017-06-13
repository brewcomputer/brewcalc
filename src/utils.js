// @flow
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'
import type { Fermentable } from './types/fermentable'
import type { Hop } from './types/hop'

export const kgToOunces = (k: number) => k * 35.2739619

export const kgToPounds = (k: number) => kgToOunces(k) / 16

export const litersToOunces = (l: number) => l / 0.0295735

export const ouncesToLiters = (o: number) => o * 0.0295735

export const litersToGallons = (l: number) => litersToOunces(l) / 128

export const sum = (array: Array<number>) =>
  array.reduce((pv, cv) => pv + cv, 0)

export const scaleRecipe = (r: Recipe, { batchSize }: Equipment) => {
  const scaleFactor: number = batchSize / r.batchSize
  return {
    ...r,
    batchSize: batchSize,
    fermentables: scaleIngredients(scaleFactor, r.fermentables),
    hops: scaleIngredients(scaleFactor, r.hops)
  }
}

const scaleIngredients = (scaleFactor: number, ingredients: any) =>
  ingredients.map(i => {
    return {
      ...i,
      amount: scaleFactor * i.amount
    }
  })
