// @flow

type Measurable = {
  value: number,
  unit: string
}

type Efficiency = {
  brewhouse: number
}

type Fermentable = {
  type: string,
  amount: Measurable,
  yield: number,
  color: Measurable
}

type Hop = {
  amount: Measurable,
  alpha_acid_units: number,
  form: string,
  time: Measurable,
  use: string
}

type Yeast = {
  attenuation: number
}

type Ingredients = {
  fermentable_bill: Array<Fermentable>,
  hop_bill: Array<Hop>,
  culture_additions: Array<Yeast>
}

type MashStep = {
  type: string,
  infuse_amount: Measurable
}

type Mash = {
  mash_steps: Array<MashStep>
}

export type RecipeBeerJSON = {
  batch_size: ?Measurable,
  boil_size: ?Measurable,
  boil_time: ?Measurable,
  efficiency: ?Efficiency,
  ingredients: ?Ingredients,
  mash: ?Mash
}
