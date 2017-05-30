//Recipe TYPE	May be one of “Extract”, “Partial Mash” or “All Grain”
export const recipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain',
}

//Fermentable TYPE May be "Grain", "Sugar", "Extract", "Dry Extract" or "Adjunct".  Extract refers to liquid extract.
export const fermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct',
}

//Hop USE May be "Boil", "Dry Hop", "Mash", "First Wort" or "Aroma".  Note that "Aroma" and "Dry Hop" do not contribute to the bitterness of the beer while the others do.
//Aroma hops are added after the boil and do not contribute substantially to beer bitterness.
const hopUse = {
  boil: 'Boil',
  dryHop: 'DryHop',
  mash: 'Mash',
  firstWort: 'FirstWort',
  aroma: 'Aroma',
}

//Hop FORM May be "Pellet", "Plug" or "Leaf"
const hopForms = {
  pellet: 'Pellet',
  plug: 'Plug',
  leaf: 'Leaf',
}

//Mash type May be “Infusion”, “Temperature” or “Decoction” depending on the type of step.
//Infusion denotes adding hot water, Temperature denotes heating with an outside heat source, and decoction denotes drawing off some mash for boiling.
export const mashType = {
  infusion: 'Infusion',
  temperature: 'Temperature',
  decoction: 'Decoction',
}
