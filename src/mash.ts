import {
  FermentableAdditionType,
  MashStepType,
  TemperatureType,
  VolumeType,
  MassType,
} from '../types/beerjson'
import { getMeasurableValue, sum } from './utils'
import { convertMeasurableValue } from './units'
import { use } from './timing'

const grainVolume = 0.652 // l/kg
const boilingTemp = 100
const maltSpecificHeat = 0.38 // Cal/gram-C
const initialWaterGrainRatio = 2.5 // l/kg

const adjustTunMass = (tunVolume, totVolume, tunMass) => {
  tunVolume = tunVolume * 0.8
  return tunVolume > 0 && totVolume < tunVolume
    ? (tunMass * totVolume) / tunVolume
    : tunMass
}

const calcDecoctionStep = (
  startTemp,
  targetTemp,
  startVolume,
  mashGrainWeight,
  tunMass = 0,
  tunSpecificHeat = 0,
  tunVolume = 0
): { amount: VolumeType } => {
  const totVolume = grainVolume * mashGrainWeight + startVolume
  const adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass)
  let fraction =
    (((maltSpecificHeat * mashGrainWeight +
      tunSpecificHeat * adjustedTunMass +
      startVolume) /
      (maltSpecificHeat * mashGrainWeight + startVolume)) *
      (targetTemp - startTemp)) /
    (boilingTemp - startTemp)

  if (fraction > 1) {
    fraction = 1
  }
  return { amount: { value: totVolume * fraction, unit: 'l' } }
}

const calcInfusionStep = (
  startTemp,
  stepTemp,
  startVolume,
  index,
  mashGrainWeight
): {
  amount: VolumeType
  infuse_temperature: TemperatureType
} => {
  const infuseTemp =
    index > 0
      ? boilingTemp
      : (maltSpecificHeat * (stepTemp - startTemp)) / initialWaterGrainRatio +
        stepTemp
  const infuseAmount =
    ((mashGrainWeight * maltSpecificHeat + startVolume) *
      (stepTemp - startTemp)) /
    (infuseTemp - stepTemp)

  return {
    infuse_temperature: {
      unit: 'C',
      value: infuseTemp,
    },
    amount: {
      unit: 'l',
      value: infuseAmount,
    },
  }
}

export function recalculateMashSteps(
  mash_steps: Array<MashStepType>,
  grain_temperature: TemperatureType,
  mashGrainWeight: MassType
): Array<MashStepType> {
  let startVolume = 0
  let startTemp = grain_temperature.value

  const grainWeightValue = convertMeasurableValue(mashGrainWeight, 'kg')

  return mash_steps.map((step: MashStepType, index: number): MashStepType => {
    const stepTemp = getMeasurableValue(step.step_temperature)

    switch (step.type) {
      case 'decoction': {
        const { amount } = calcDecoctionStep(
          startTemp,
          stepTemp,
          startVolume,
          grainWeightValue
        )

        return {
          ...step,
          amount,
        }
      }
      case 'infusion': {
        const { amount, infuse_temperature } = calcInfusionStep(
          startTemp,
          stepTemp,
          startVolume,
          index,
          grainWeightValue
        )

        startVolume += amount.value
        startTemp = stepTemp

        return {
          ...step,
          infuse_temperature,
          amount,
        }
      }
      default:
        return step
    }
  })
}

export const calcMashGrainWeight = (
  fermentables: Array<FermentableAdditionType>
): MassType => {
  const value = sum(
    fermentables.map(({ timing, type, amount }: FermentableAdditionType) =>
      type === 'grain' && use(timing).add_to_mash
        ? convertMeasurableValue(amount, 'lb')
        : 0
    )
  )
  return {
    value,
    unit: 'lb',
  }
}

export function updateSpargeVolume(
  mash_steps: Array<MashStepType>,
  spargeVolume: VolumeType
): Array<MashStepType> {
  return mash_steps.map((step) => {
    if (step.type === 'sparge') {
      return { ...step, amount: spargeVolume }
    }
    return step
  })
}
