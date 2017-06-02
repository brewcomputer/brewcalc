// @flow
export type Fermentable = {
  yield: number,
  amount: number,
  time: number,
  potential: number,
  type: "Grain" | "Sugar" | "Extract" | "Dry Extract" | "Adjunct"
};

export const FermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct'
}
