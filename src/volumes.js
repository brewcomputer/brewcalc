import { sum, options } from './utils.js'
import { mashType } from './enums.js'
import { Fermentable } from './types/fermentable'

export const totalGrains = recipe => {
  return sum(
    recipe.fermentables.map(
      ({ amount, addAfterBoil }) => (!addAfterBoil ? amount : 0)
    )
  )
}

export const totalMashGrains = recipe => {
  return sum(
    recipe.fermentables.map(({ amount, type }) => {
      if (type == Fermentable.Types.grain) return amount
      else return 0
    })
  )
}

export const totalMashWater = recipe => {
  var totalWater = 0

  if (recipe.mash.mashSteps == null || recipe.mash.mashSteps == 'undefined')
    return 0

  recipe.mash.mashSteps.map(mashStep => {
    if (mashStep.type != mashType.decoction) {
      totalWater += mashStep.infuseAmount
    }
  })

  return totalWater + recipe.equipment.lauterDeadspace
}

export const vaterAvailableFromMash = recipe => {
  return (
    totalMashWater(recipe) - totalMashGrains(recipe) * options().grainAbsorb
  )
}

export const spargeVol = recipe => {
  const grainAbsLoss = options().grainAbsorb * totalMashGrains(recipe)

  const vol =
    recipe.equipment.boilSize +
    grainAbsLoss -
    recipe.equipment.topUpKettle +
    options().mashTunDeadSpace -
    totalMashWater(recipe)
  return vol
}

export const calcWater = ({
  batchSize,
  totalGrains,
  boilTime,
  evapRate,
  coolingLossPct,
  mashTunDeadSpace = 0,
  kettleDeadSpace = 0,
  dissolvedVol = 0,
  hopWaterLoss = 0,
  pumpWaterLoss = 0,
}) => {
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
    fromKettleVol,
  }
}
