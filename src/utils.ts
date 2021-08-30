export const kgToOunces = (k: number) => k * 35.2739619

export const kgToPounds = (k: number) => kgToOunces(k) / 16

export const poundsTokg = (p: number) => p / 2.204

export const litersToOunces = (l: number) => l / 0.0295735

export const ouncesToLiters = (o: number) => o * 0.0295735

export const litersToGallons = (l: number) => litersToOunces(l) / 128

export const gallonsToLiters = (g: number) => ouncesToLiters(g * 128)

export const fahrenheitToCelsius = (f: number) => (f - 32) / 1.8

export const celsiusToFahrenheit = (c: number) => c * 1.8 + 32

export const kpaToPsi = (kpa: number) => kpa * 0.14503773773020923

export const psiTokpa = (psi: number) => psi * 6.894757293168361

export const sgToPlato = (sg: number) =>
  -616.868 +
  1111.14 * sg -
  630.272 * Math.pow(sg, 2) +
  135.997 * Math.pow(sg, 3)

export const platoToSG = (e: number) => 1 + e / (258.6 - (e / 258.2) * 227.1)

export const brixToSG = (brix: number) =>
  brix / (258.6 - (brix / 258.2) * 227.1) + 1

export const sgToBrix = (sg: number) =>
  -669.5622 +
  1262.7749 * sg -
  775.6821 * Math.pow(sg, 2) +
  182.4601 * Math.pow(sg, 3)

export const srmToEbc = (srm: number) => srm * 1.97

export const ebcToSrm = (ebc: number) => ebc * 0.508

export const srmToLovibond = (srm: number) => (srm + 0.76) / 1.3546

export const lovibondToSrm = (lovibond: number) => 1.3546 * lovibond - 0.76

export const sum = (array: Array<number>): number =>
  array.reduce((pv, cv) => pv + cv, 0)

const scaleIngredients = (scaleFactor: number, ingredients: any) =>
  ingredients.map((i) => {
    return {
      ...i,
      amount: scaleFactor * i.amount,
    }
  })

export const capitalize = (str: string): string => {
  const words: Array<string> = str.split(' ')
  const capitalizedWords: Array<string> = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  return capitalizedWords.join(' ')
}

export const isNotEmptyArray = (arr: Array<any>): boolean => {
  if (Array.isArray(arr)) {
    return arr.length > 0
  }
  return false
}

export function round(number, precision = 0) {
  if (typeof number === 'number') {
    return Number(number.toFixed(precision))
  }
  return null
}

export function isObject(object) {
  return object != null && typeof object === 'object'
}

export function isMeasurable(object) {
  return (
    isObject(object) &&
    object.hasOwnProperty('value') &&
    object.hasOwnProperty('unit')
  )
}

export function getMeasurableValue(measurable) {
  if (isMeasurable(measurable)) {
    return measurable.value
  }
  return null
}

export const roundMeasurable = (m, precision) => {
  return {
    unit: m.unit,
    value: round(m.value, precision),
  }
}
