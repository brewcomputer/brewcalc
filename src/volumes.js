// @flow
import { sum, options } from './utils.js'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import { MashType } from './types/mashStep'
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'

export const calculateVolumes = (
  { fermentables }: Recipe,
  equipment: Equipment
) => {
  const mashGrainWeight = sum(
    fermentables.map(
      ({ amount, type }) => type == FermentableTypes.grain ? amount : 0
    )
  )
  return {
    //===
    //Mashing
    //===
    //TotalWater
    mashGrainWeight
    //GrainAbsorption
    //MashTunAddition
    //TotalMashWaterAdds
    //TunDeadspace
    //MashTunVolume
    //MashTunVolumeNeeded
    //WaterAvailFromMash
    //SpargeVol
    //===
    //Boiling
    //===
    //KettleTopUp
    //EstPreBoilVolume
    //MeasPreBoilVolume
    //EvapRate
    //BoilOffVolume
    //PostBoilVolume
    //CoolingShrinkage
    //CoolLossPrc
    //TrubLoss
    //===
    //Fermenting
    //===
    //FermentationTopUp
    //BatchSize
    //MeasBatchSize
    //StarterSize
    //FermentationLoss
    //EstBottlingVol
    //MeasBottlingVol
    //*/
  }
}
/*
export const totalGrains = recipe => {
  return sum(
    recipe.fermentables.map(
      ({ amount, addAfterBoil }) => !addAfterBoil ? amount : 0
    )
  )
}

export const totalMashGrains = recipe => {
  return sum(
    recipe.fermentables.map(({ amount, type }) => {
      if (type == FermentableTypes.grain) return amount
      else return 0
    })
  )
}

export const totalMashWater = recipe => {
  var totalWater = 0

  if (recipe.mash.mashSteps == null || recipe.mash.mashSteps == 'undefined')
    return 0

  recipe.mash.mashSteps.map(mashStep => {
    if (mashStep.type != MashType.decoction) {
      totalWater += mashStep.infuseAmount
    }
  })

  return totalWater + recipe.equipment.lauterDeadspace
}

export const vaterAvailableFromMash = recipe => {
  return totalMashWater(recipe) -
    totalMashGrains(recipe) * options().grainAbsorb
}

export const spargeVol = recipe => {
  const grainAbsLoss = options().grainAbsorb * totalMashGrains(recipe)

  const vol = recipe.equipment.boilSize +
    grainAbsLoss -
    recipe.equipment.topUpKettle +
    options().mashTunDeadSpace -
    totalMashWater(recipe)
  return vol
}

export const calcWater = (
  {
    batchSize,
    totalGrains,
    boilTime,
    evapRate,
    coolingLossPct,
    mashTunDeadSpace = 0,
    kettleDeadSpace = 0,
    dissolvedVol = 0,
    hopWaterLoss = 0,
    pumpWaterLoss = 0
  }
) => {
  const coolingLoss = batchSize * coolingLossPct

  const grainAbsLoss = options().grainAbsorb * totalGrains

  const boilOffLoss = evapRate * boilTime / 60

  const intoFermenterVol = batchSize
  const fromKettleVol = intoFermenterVol + pumpWaterLoss
  const postBoilVol = fromKettleVol + hopWaterLoss + kettleDeadSpace
  const hotPostBoilVol = postBoilVol + coolingLoss
  const preBoilVol = hotPostBoilVol + boilOffLoss
  const preBoilWaterVol = preBoilVol - dissolvedVol
  const totalWater = preBoilWaterVol + grainAbsLoss + mashTunDeadSpace

  return {
    grainAbsLoss,
    totalWater,
    preBoilWaterVol,
    preBoilVol,
    hotPostBoilVol,
    postBoilVol,
    fromKettleVol
  }
}
*/
