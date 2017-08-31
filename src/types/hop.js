// @flow
export type Hop = {
  name: string,
  alpha: number,
  amount: number,
  use: 'Boil' | 'Dry Hop' | 'Mash' | 'First Wort' | 'Aroma',
  time: number,
  form?: 'Pellet' | 'Plug' | 'Leaf'
}

// Hop USE May be "Boil", "Dry Hop", "Mash", "First Wort" or "Aroma".
// Note that "Aroma" and "Dry Hop" do not contribute to the bitterness of the beer while the others do.
// Aroma hops are added after the boil and do not contribute substantially to beer bitterness.
export const HopUse = {
  boil: 'Boil',
  dryHop: 'Dry Hop',
  mash: 'Mash',
  firstWort: 'First Wort',
  aroma: 'Aroma'
}

// Hop FORM May be "Pellet", "Plug" or "Leaf"
export const HopForms = {
  pellet: 'Pellet',
  plug: 'Plug',
  leaf: 'Leaf'
}
