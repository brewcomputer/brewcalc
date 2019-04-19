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
  lovibondToSrm,
  capitalize,
  isNotEmptyArray
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
import type { RecipeBeerJSON } from './types/beerjson'

const calculateRecipeBeerJSON = ({
  batch_size,
  boil_size,
  boil_time,
  ingredients,
  efficiency,
  mash
}: RecipeBeerJSON) => {
  const batchSize = batch_size ? batch_size.value : null
  const boilSize = boil_size ? boil_size.value : null
  const boilTime = boil_time ? boil_time.value : null
  const brewHouseEff = efficiency ? efficiency.brewhouse / 100 : null

  let fermentables = null,
    hops = null,
    yeasts = null

  if (ingredients) {
    const { fermentable_bill, hop_bill, culture_additions } = ingredients

    fermentables = isNotEmptyArray(fermentable_bill)
      ? // $FlowFixMe
        fermentable_bill.map(item => ({
          type: capitalize(item.type),
          amount: item.amount.value,
          potential: (item.yield * 0.01 * 46) / 1000 + 1,
          color: item.color.value
        }))
      : null

    hops = isNotEmptyArray(hop_bill)
      ? // $FlowFixMe
        hop_bill.map(item => ({
          amount: item.amount.value,
          alpha: item.alpha_acid_units / 100,
          form: capitalize(item.form),
          time: item.time.value,
          use: capitalize(item.use)
        }))
      : null

    yeasts = isNotEmptyArray(culture_additions)
      ? // $FlowFixMe
        culture_additions.map(item => ({
          attenuation: item.attenuation / 100
        }))
      : null
  }

  let mashSteps = null
  if (mash && isNotEmptyArray(mash.mash_steps)) {
    mashSteps = {
      // $FlowFixMe
      mashSteps: mash.mash_steps.map(item => ({
        type: capitalize(item.type),
        infuseAmount: item.infuse_amount.value
      }))
    }
  }

  // $FlowFixMe
  return calculateRecipe({
    batchSize,
    boilSize,
    boilTime,
    fermentables,
    hops,
    yeasts,
    efficiency: brewHouseEff,
    // $FlowFixMe
    mash: mashSteps
  })
}

const calculateRecipe = ({
  batchSize,
  boilSize,
  boilTime,
  fermentables,
  efficiency,
  yeasts,
  hops,
  mash
}: Recipe) => {
  let og = null,
    fg = null,
    ibu = null,
    abv = null,
    colorSRMvalue = null,
    volumes = null

  if (batchSize && fermentables && efficiency) {
    og = originalGravity(batchSize, gravityPoints(fermentables, efficiency))

    colorSRMvalue = colorSRM(fermentables, batchSize)

    if (yeasts) {
      fg = finalGravity(
        batchSize,
        gravityPoints(fermentables, efficiency, yeasts[0].attenuation)
      )

      abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))
      const calories = calcCalories(
        Number(og.toFixed(3)),
        Number(fg.toFixed(2))
      )
      const caloriesInOneL = calories / (12 * ouncesToLiters(1))
    }

    if (hops && boilSize) {
      const avgBoilGravityPts = boilGravity(batchSize, boilSize, og) - 1
      ibu = bitternessIbuTinseth(hops, avgBoilGravityPts, batchSize)
    }
  }

  if (mash && boilTime && fermentables && boilSize) {
    // $FlowFixMe
    volumes = calculateVolumes({ fermentables, mash, boilTime }, { boilSize })
  }

  return {
    stats: {
      og: og && Number(og.toFixed(3)),
      fg: fg && Number(fg.toFixed(3)),
      ibu: ibu && Number(ibu.toFixed(1)),
      color: colorSRMvalue && Number(colorSRMvalue.toFixed(1)),
      abv: abv && Number(abv.toFixed(1))
    },
    volumes
  }
}

export {
  calculateRecipe,
  calculateRecipeBeerJSON,
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
