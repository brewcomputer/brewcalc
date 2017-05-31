// @flow
export class Fermentable {
  yield: number
  amount: number
  time: number
  type: 'Grain' | 'Sugar' | 'Extract' | 'Dry Extract' | 'Adjunct'
  static Types = {
    grain: 'Grain',
    sugar: 'Sugar',
    extract: 'Extract',
    dryExtract: 'Dry Extract',
    adjunct: 'Adjunct',
  }
}
