// @flow
import { sum, kgToOunces, ouncesToLiters } from './utils.js'
import { FermentableTypes } from './types/fermentable'
import { MashType } from './types/mashStep'
import type { Recipe } from './types/recipe'
import type { Equipment } from './types/equipment'

export const calculateVolumes = (
  { fermentables, mash, boilTime }: Recipe,
  {
    lauterDeadspace,
    boilSize,
    evapRate,
    coolingLossPct,
    trubChillerLoss,
    topUpKettle,
    BIAB
  }: Equipment
) => {
  const starterSize = 0
  const fermentationLoss = 1.70

  const mashGrainWeight = sum(
    fermentables.map(
      ({ amount, type }) => type === FermentableTypes.grain ? amount : 0
    )
  )
  const grainAbsorbtionRatio = BIAB ? 0.5860 : 0.96 // number of ounces of water absorbed per ounce of the grain

  const grainAbsorbtion = ouncesToLiters(
    kgToOunces(mashGrainWeight) * grainAbsorbtionRatio
  )

  const totalMashWaterAdds = lauterDeadspace +
    sum(
      mash.mashSteps.map(
        ({ type, infuseAmount }) =>
          type !== MashType.decoction ? infuseAmount : 0
      )
    )

  // https://byo.com/bock/item/410-calculating-water-usage-advanced-brewing
  // Total mash volume = volume of water + volume of grain
  // Of course first it is necessary to know the volume that the grain displaces when mashed (which is different from its dry volume).
  // Once again this depends on the specifics of the grain bill, but a value of 0.32 quarts per pound (0.67 L/kg) is a reasonable average.
  const mashVolumeNeeded = totalMashWaterAdds + mashGrainWeight * 0.67

  const waterAvailFromMash = totalMashWaterAdds - grainAbsorbtion

  const spargeVol = boilSize +
    grainAbsorbtion -
    topUpKettle +
    lauterDeadspace -
    totalMashWaterAdds

  const estPreBoilVolume = waterAvailFromMash + (spargeVol - lauterDeadspace)
  const boilOffVolume = estPreBoilVolume * evapRate * (boilTime / 60)
  const postBoilVolume = estPreBoilVolume - boilOffVolume
  const coolingShrinkage = postBoilVolume * coolingLossPct

  const estBottlingVol = postBoilVolume -
    coolingShrinkage -
    trubChillerLoss -
    starterSize -
    fermentationLoss

  const totalWater = totalMashWaterAdds + spargeVol

  return {
    totalWater,
    // Mashing
    mashGrainWeight,
    grainAbsorbtion,
    totalMashWaterAdds,
    mashVolumeNeeded,
    waterAvailFromMash,
    spargeVol,
    // Boiling
    estPreBoilVolume,
    boilOffVolume,
    postBoilVolume,
    coolingShrinkage,
    // Fermenting
    estBottlingVol
  }
}
