// @flow
export type Fermentable = {
  name: string,
  color: number,
  amount: number,
  yield: number,
  potential: number,
  addAfterBoil?: boolean,
  type: 'Grain' | 'Sugar' | 'Extract' | 'Dry Extract' | 'Adjunct'
}

export const FermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct'
}
