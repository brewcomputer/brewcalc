// @flow
import { sum, kilosToOunces, ouncesToLiters } from './utils.js'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import { MashType } from './types/mashStep'
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'

export const calculateVolumes = (
  { fermentables, mash }: Recipe,
  equipment: Equipment
) => {
  const mashTunAddition = 0
  const kettleTopUp = 0

  const tunDeadspace = 3.03
  const mashTunVolume = 37.85

  const mashGrainWeight = sum(
    fermentables.map(
      ({ amount, type }) => type == FermentableTypes.grain ? amount : 0
    )
  )
  const grainAbsorptionRatio = 0.12 //number of ounces of water absorbed per ounce of the grain
  const grainAbsorption = ouncesToLiters(
    kilosToOunces(mashGrainWeight) * grainAbsorptionRatio
  )

  const totalMashWaterAdds = tunDeadspace +
    sum(
      mash.mashSteps.map(
        ({ type, infuseAmount }) =>
          type != MashType.decoction ? infuseAmount : 0
      )
    )

  //https://byo.com/bock/item/410-calculating-water-usage-advanced-brewing
  //Total mash volume = volume of water + volume of grain
  //Of course first it is necessary to know the volume that the grain displaces when mashed (which is different from its dry volume).
  //Once again this depends on the specifics of the grain bill, but a value of 0.32 quarts per pound (0.67 L/kg) is a reasonable average.
  const mashVolumeNeeded = totalMashWaterAdds + mashGrainWeight * 0.67

  const waterAvailFromMash = totalMashWaterAdds - grainAbsorption

  const spargeVol = equipment.boilSize +
    grainAbsorption -
    kettleTopUp +
    tunDeadspace -
    totalMashWaterAdds

  return {
    //TotalWater
    //===
    //Mashing
    //===
    mashGrainWeight,
    grainAbsorption,
    totalMashWaterAdds,
    mashVolumeNeeded,
    waterAvailFromMash,
    spargeVol
    //===
    //Boiling
    //===
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
