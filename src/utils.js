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

export const sum = array => array.reduce((pv, cv) => pv + cv, 0)

export const options = () => {
  const stepingEfficiency = 0.15
  const grainAbsorb = 0.13
  const mashTunDeadSpace = 3.03
  const trubLossPercent = 0
  return {
    stepingEfficiency,
    grainAbsorb,
    mashTunDeadSpace,
    trubLossPercent,
  }
}
