// @flow
export type Fermentable = {
  color: number,
  yield: number,
  amount: number,
  time: number,
  potential: number,
  addAfterBoil: boolean,
  type: "Grain" | "Sugar" | "Extract" | "Dry Extract" | "Adjunct"
};

export const FermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct'
}
