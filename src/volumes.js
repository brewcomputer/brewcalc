// @flow
import { sum, kilosToOunces, ouncesToLiters } from './utils.js'
import { FermentableTypes } from './types/fermentable'
import type { Fermentable } from './types/fermentable'
import { MashType } from './types/mashStep'
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'

export const calculateVolumes = (
  { fermentables, mash, boilTime }: Recipe,
  equipment: Equipment
) => {
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

  const estPreBoilVolume = waterAvailFromMash + (spargeVol - tunDeadspace)
  const boilOffVolume = estPreBoilVolume * equipment.evapRate * (boilTime / 60)
  const postBoilVolume = estPreBoilVolume - boilOffVolume
  const coolingShrinkage = postBoilVolume * equipment.coolingLossPct
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
    spargeVol,
    //===
    //Boiling
    //===
    estPreBoilVolume,
    boilOffVolume,
    postBoilVolume,
    coolingShrinkage
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
