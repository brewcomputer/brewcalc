// @flow
import {
  originalGravity,
  finalGravity,
  boilGravity,
  gravityPoints,
  estABW,
  estABV,
  estABVrealExtract,
  srmToRgb,
  colorSRM,
  srmToCss,
  yeastNeeded,
  yeastCount,
  yeastStarterGrow,
  carbonation,
  calcCalories
} from './brewcalc'

import {
  bitternessIbuTinseth,
  bitternessRatio,
  ragerHopIbu,
  bitternessIbuRager
} from './hops'
import { mashRecalculate } from './mash'
import {
  kgToOunces,
  kgToPounds,
  poundsTokg,
  litersToOunces,
  ouncesToLiters,
  litersToGallons,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  kpaToPsi,
  psiTokpa,
  sgToPlato,
  platoTosg,
  sum,
  scaleRecipe,
  srmToEbc,
  ebcToSrm,
  srmToLovibond,
  lovibondToSrm
} from './utils'
import { calculateVolumes } from './volumes'
import { calcWaterChemistry } from './waterChem'

import { FermentableTypes } from './types/fermentable'
import { HopForms, HopUse } from './types/hop'
import { MashType } from './types/mashStep'
import { RecipeTypes } from './types/recipe'
import { YeastForms, YeastTypes } from './types/yeast'

import { importFromBeerXml } from './importFromBeerXml.js'

import type { Recipe } from './types/recipe'

const calculateRecipe = ({
  batchSize,
  boilSize,
  fermentables,
  efficiency,
  yeasts,
  hops
}: Recipe) => {
  const og = originalGravity(batchSize, gravityPoints(fermentables, efficiency))

  const fg = finalGravity(
    batchSize,
    gravityPoints(fermentables, efficiency, yeasts[0].attenuation)
  )

  const avgBoilGravityPts = boilGravity(batchSize, boilSize, og) - 1

  const ibu = bitternessIbuTinseth(hops, avgBoilGravityPts, batchSize)

  const colorSRMvalue = colorSRM(fermentables, batchSize)

  const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const calories = calcCalories(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const caloriesInOneL = calories / (12 * ouncesToLiters(1))

  return {
    og: Number(og.toFixed(3)),
    fg: Number(fg.toFixed(3)),
    ibu: Number(ibu.toFixed(1)),
    color: Number(colorSRMvalue.toFixed(1)),
    abv: Number((abv / 100).toFixed(3))
  }
}

export {
  calculateRecipe,
  originalGravity,
  finalGravity,
  boilGravity,
  gravityPoints,
  estABW,
  estABV,
  estABVrealExtract,
  srmToRgb,
  colorSRM,
  srmToCss,
  yeastNeeded,
  yeastCount,
  yeastStarterGrow,
  carbonation,
  calcCalories,
  bitternessIbuTinseth,
  bitternessRatio,
  ragerHopIbu,
  bitternessIbuRager,
  mashRecalculate,
  kgToOunces,
  kgToPounds,
  poundsTokg,
  litersToOunces,
  ouncesToLiters,
  litersToGallons,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  kpaToPsi,
  psiTokpa,
  sgToPlato,
  platoTosg,
  srmToEbc,
  ebcToSrm,
  srmToLovibond,
  lovibondToSrm,
  sum,
  scaleRecipe,
  calculateVolumes,
  calcWaterChemistry,
  FermentableTypes,
  RecipeTypes,
  HopForms,
  HopUse,
  MashType,
  YeastForms,
  YeastTypes,
  importFromBeerXml
}
