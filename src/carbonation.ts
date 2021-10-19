import { celsiusToFahrenheit, litersToGallons } from './utils'

// https://byo.com/yeast/item/164-balancing-your-draft-system-advanced-brewing

const kegPressure = (carbVolume: number, t: number) =>
  Math.max(
    0,
    -16.6999 -
      0.0101059 * t +
      0.00116512 * t * t +
      0.173354 * t * carbVolume +
      4.24267 * carbVolume -
      0.0684226 * carbVolume * carbVolume
  )

// http://www.homebrewtalk.com/showthread.php?t=441383
const primingSugar = (carbVolume, t, batchSize) =>
  15.195 * batchSize * (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t)

const normalizeTemp = (t: number) => Math.max(32.0, celsiusToFahrenheit(t))

export const carbonation = (
  carbVolume: number,
  t: number,
  batchSize: number
) => {
  const sugar = primingSugar(
    carbVolume,
    normalizeTemp(t),
    litersToGallons(batchSize)
  )

  return {
    kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
    kegSugar: sugar * 0.5,
    cornSugar: sugar,
    dme: sugar * 1.538,
  }
}

// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs

const caloriesAlc = (og, fg) => 1881.22 * fg * ((og - fg) / (1.775 - og))
const caloriesExt = (og, fg) =>
  3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004)

export const calcCalories = (og: number, fg: number) =>
  caloriesAlc(og, fg) + caloriesExt(og, fg)
