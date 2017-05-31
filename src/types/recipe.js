// @flow
import { Equipment } from './equipment'
import { Fermentable } from './fermentable'
import { Yeast } from './yeast'

export class Recipe {
  static Types = {
    extract: 'Extract',
    partialMash: 'Partial Mash',
    allGrain: 'All Grain',
  }

  // Beer XML 1.0 Required Fields
  name: string
  version: number
  type: 'Extract' | 'All Grain' | 'Partial Mash'
  //style
  brewer: string
  batchSize: number
  boilSize: number
  boilTime: number
  efficiency: number
  equipment: Equipment
  //hops: Array<Hop>
  fermentables: Array<Fermentable>
  yeasts: Array<Yeast>
  //miscs: Array<Misc>
  //waters: Array<Water>
  //mashProfile: MashProfile
}
