import { sum } from './utils'
import {
  VolumeType,
  MassType,
  EquipmentItemType,
  BoilProcedureType,
  MashStepType,
} from '../types/beerjson'
import { convertMeasurableValue } from './units'

const defaultVolume: VolumeType = {
  value: 0,
  unit: 'gal',
}

const defaultBoil: BoilProcedureType = {
  pre_boil_size: {
    value: 0,
    unit: 'gal',
  },
  boil_time: {
    value: 0,
    unit: 'min',
  },
}

const coolingShrinkageRate = 0.04

const convertToGallons = (volume: VolumeType) =>
  convertMeasurableValue(volume, 'gal')

// 0.96 - number of fl. ounces of water absorbed per ounce of the grain
// 128 fl. ounces in gallon, 16 ounces in pound
const grainAbsorptionRatio = (0.96 / 128) * 16

const calcGrainAbsorption = (grainWeight: MassType): VolumeType => {
  const value = convertMeasurableValue(grainWeight, 'lb') * grainAbsorptionRatio
  return {
    value,
    unit: 'gal',
  }
}

const calcMashWaterVolume = (
  mash_steps: Array<MashStepType> = []
): VolumeType => {
  const value = sum(
    mash_steps.map(({ type, amount }: MashStepType) =>
      type === 'infusion' ? convertToGallons(amount) : 0
    )
  )
  return {
    value,
    unit: 'gal',
  }
}

export const calcMashVolumes = (
  pre_boil_size: VolumeType,
  mashSteps: Array<MashStepType>,
  mashGrainWeight: MassType,
  equipment: {
    hlt?: EquipmentItemType
    mash_tun?: EquipmentItemType
    brew_kettle?: EquipmentItemType
    fermenter?: EquipmentItemType
  }
): {
  mash_volume: VolumeType
  sparge_volume: VolumeType
  total_volume: VolumeType
} => {
  const mashWaterVolume = calcMashWaterVolume(mashSteps)

  const grainAbsorption = calcGrainAbsorption(mashGrainWeight)

  const mashLoss =
    equipment.mash_tun != null ? convertToGallons(equipment.mash_tun.loss) : 0

  const spargeVolumeValue =
    convertToGallons(pre_boil_size) +
    grainAbsorption.value -
    mashWaterVolume.value +
    mashLoss

  const spargeVolume: VolumeType = {
    value: spargeVolumeValue,
    unit: 'gal',
  }

  const totalVolume: VolumeType = {
    value: mashWaterVolume.value + spargeVolume.value,
    unit: 'gal',
  }

  return {
    mash_volume: mashWaterVolume,
    sparge_volume: spargeVolume,
    total_volume: totalVolume,
  }
}

export const calcBoilVolumes = (
  batch_size: VolumeType,
  boil: BoilProcedureType = defaultBoil,
  equipment: {
    hlt?: EquipmentItemType
    mash_tun?: EquipmentItemType
    brew_kettle?: EquipmentItemType
    fermenter?: EquipmentItemType
  }
): { pre_boil_size: VolumeType } => {
  const boilProfile = boil || defaultBoil

  const postBoilVolume = convertToGallons(batch_size)
  const boilLoss =
    equipment.brew_kettle != null
      ? convertToGallons(equipment.brew_kettle.loss)
      : defaultVolume.value
  const boilRate =
    equipment.brew_kettle != null &&
    equipment.brew_kettle.boil_rate_per_hour != null
      ? convertToGallons(equipment.brew_kettle.boil_rate_per_hour)
      : 0
  const boilOffVolume = (boilRate * boilProfile.boil_time.value) / 60
  const coolingShrinkage = postBoilVolume * coolingShrinkageRate
  const preBoilVolume =
    postBoilVolume + boilOffVolume + boilLoss + coolingShrinkage

  return {
    pre_boil_size: {
      value: preBoilVolume,
      unit: 'gal',
    },
  }
}
