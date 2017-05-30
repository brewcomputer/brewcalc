import { recipeTypes } from './enums.js'

const kilosToOunces = k => {
  return k * 35.2739619
}

export const kilosToPounds = k => {
  return kilosToOunces(k) / 16
}

const litersToOunces = l => {
  return l / 0.0295735
}

export const litersToGallons = l => {
  return litersToOunces(l) / 128
}

export const celsiusToFahrenheit = c => {
  return c * 1.8 + 32
}

export const getPpg = y => {
  return y * 46 / 100
}

export const isUnfermentable = name => {
  if (
    //var areEqual = string1.toUpperCase() === string2.toUpperCase();
    name.toUpperCase() == 'Malto-Dextrine'.toUpperCase() ||
    name.toUpperCase() == 'Dextrine Malt'.toUpperCase() ||
    name.toUpperCase() == 'Cara-pils'.toUpperCase() ||
    name.toUpperCase() == 'Milk Sugar (Lactose)'.toUpperCase()
  ) {
    return true
  }
  return false
}

export const getEfficiency = recipe => {
  if (recipe.type == recipeTypes.extract) {
    return 100
  }
  return recipe.efficiency
}

export const sum = array => array.reduce((pv, cv) => pv + cv, 0)

export const options = () => {
  const stepingEfficiency = 0.15
  const grainAbsorb = 0.13
  const mashTunDeadSpace = 3.03
  return {
    stepingEfficiency,
    grainAbsorb,
    mashTunDeadSpace,
  }
}
