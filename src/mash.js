// @flow
import type { Equipment } from './types/equipment'
import type { Mash } from './types/mash'
import { MashType } from './types/mashStep'

const grainVolume = 0.652 // l/kg
const maltSpecificHeat = 0.38 // Cal/gram-C
const tunDeadspace = 0
const boilTemp = 100

const calcTotVolume = (
  grainVolume,
  mashGrainWeight,
  infuseAmount = 0,
  startVolume = 0
) => grainVolume * mashGrainWeight + infuseAmount + startVolume

const adjustTunMass = (tunVolume, totVolume, tunMass) => {
  tunVolume = tunVolume * 0.8
  return tunVolume > 0 && totVolume < tunVolume
    ? tunMass * totVolume / tunVolume
    : tunMass
}

const decoctVolume = (
  targetTemp,
  startVolume,
  startTemp,
  mashGrainWeight,
  tunMass,
  tunSpecificHeat,
  tunVolume,
  boilTemp
) => {
  const totVolume = calcTotVolume(grainVolume, mashGrainWeight, startVolume)
  const adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass)
  var fraction =
    (maltSpecificHeat * mashGrainWeight +
      tunSpecificHeat * adjustedTunMass +
      startVolume) /
    (maltSpecificHeat * mashGrainWeight + startVolume) *
    (targetTemp - startTemp) /
    (boilTemp - startTemp)

  if (fraction > 1) {
    fraction = 1
  }
  return totVolume * fraction
}

const infuseTemp = (
  infuseAmount,
  targetTemp,
  startVolume,
  startTemp,
  mashGrainWeight,
  tunMass,
  tunSpecificHeat,
  tunVolume
) => {
  if (infuseAmount <= 0) {
    return targetTemp
  }

  const totVolume = calcTotVolume(
    grainVolume,
    mashGrainWeight,
    infuseAmount,
    startVolume
  )
  const adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass)

  return (
    targetTemp +
    (maltSpecificHeat * mashGrainWeight +
      tunSpecificHeat * adjustedTunMass +
      startVolume) *
      (targetTemp - startTemp) /
      infuseAmount
  )
}

const mashInTemp = (
  infuseAmount,
  targetTemp,
  mashGrainWeight,
  grainTemp,
  tunMass,
  tunSpecificHeat,
  tunVolume,
  tunTemp
) => {
  if (infuseAmount === 0) {
    return targetTemp
  }

  const totVolume = calcTotVolume(grainVolume, mashGrainWeight, infuseAmount)
  const adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass)

  return (
    targetTemp +
    (maltSpecificHeat * mashGrainWeight * (targetTemp - grainTemp) +
      tunSpecificHeat * adjustedTunMass * (targetTemp - tunTemp)) /
      infuseAmount
  )
}

export const mashRecalculate = (
  { mashSteps, equipAdjust, grainTemp, tunTemp }: Mash,
  { tunWeight = 0, tunSpecificHeat = 0, tunVolume = 0 }: Equipment,
  mashGrainWeight: number
) => {
  const tunMass = !equipAdjust ? 0 : tunWeight
  const calcInfuseStepAmount = (i, infuseAmount) =>
    i === 0 ? infuseAmount + tunDeadspace : infuseAmount
  const calcTotalInfusedOnStepAmount = (i, mashSteps) => {
    return mashSteps.slice(0, i).reduce((pv, cv, index) => {
      return cv.type !== MashType.decoction
        ? calcInfuseStepAmount(index, cv.infuseAmount)
        : 0
    }, 0)
  }

  return mashSteps.map(
    ({ name, type, infuseAmount, stepTemp }, i, mashSteps) => {
      const infuseStepAmount = calcInfuseStepAmount(i, infuseAmount)
      const totalInfusedOnStepAmount = calcTotalInfusedOnStepAmount(
        i,
        mashSteps
      )

      let result = {}

      switch (type) {
        case MashType.infusion:
          result.infussionTemp =
            i === 0
              ? mashInTemp(
                  infuseStepAmount,
                  stepTemp,
                  mashGrainWeight,
                  grainTemp,
                  tunMass,
                  tunSpecificHeat,
                  tunVolume,
                  tunTemp
                )
              : infuseTemp(
                  infuseStepAmount,
                  stepTemp,
                  totalInfusedOnStepAmount,
                  mashSteps[i - 1].stepTemp,
                  mashGrainWeight,
                  tunMass,
                  tunSpecificHeat,
                  tunVolume
                )
          result.decoctionAmount = 0
          break
        case MashType.decoction:
          result.infussionTemp =
            i === 0
              ? mashInTemp(
                  infuseStepAmount,
                  stepTemp,
                  mashGrainWeight,
                  grainTemp,
                  tunMass,
                  tunSpecificHeat,
                  tunVolume,
                  tunTemp
                )
              : 0

          result.decoctionAmount =
            i === 0
              ? 0
              : decoctVolume(
                  stepTemp,
                  totalInfusedOnStepAmount,
                  mashSteps[i - 1].stepTemp,
                  mashGrainWeight,
                  tunMass,
                  tunSpecificHeat,
                  tunVolume,
                  boilTemp
                )
          break
        default:
          break
      }

      return {
        infuseStepAmount: infuseStepAmount,
        infussionTemp: result.infussionTemp,
        decoctionAmount: result.decoctionAmount
      }
    }
  )
}
