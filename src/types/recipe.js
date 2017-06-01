// @flow
import type { Equipment } from './equipment'
import type { Fermentable } from './fermentable'
import type { Yeast } from './yeast'

export type Recipe = {
  // Beer XML 1.0 Required Fields
  //name: string,
  //version: number,
  type: 'Extract' | 'All Grain' | 'Partial Mash',
  //style
  //brewer: string,
  batchSize: number,
  boilSize: number,
  //boilTime: number,
  efficiency: number,
  equipment: Equipment,
  //hops: Array<Hop>,
  fermentables: Array<Fermentable>,
  yeasts: Array<Yeast>,
  //miscs: Array<Misc>,
  //waters: Array<Water>,
  //mashProfile: MashProfile,
}

export const RecipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain',
}
