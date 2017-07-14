// @flow
import type { Fermentable } from './fermentable'
import type { Yeast } from './yeast'
import type { Hop } from './hop'
import type { Mash } from './mash'

export type Recipe = {
  name: string,
  type: "Extract" | "All Grain" | "Partial Mash",
  batchSize: number,
  boilSize: number,
  boilTime: number,
  hops: Array<Hop>,
  fermentables: Array<Fermentable>,
  yeasts: Array<Yeast>,
  mash: Mash
};

export const RecipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain'
}
