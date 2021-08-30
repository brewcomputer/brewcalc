import { sum } from './utils'
import {
  VolumeType,
  GravityType,
  YieldType,
  EfficiencyType,
  PercentType,
  FermentableAdditionType,
  CultureAdditionType,
} from '../types/beerjson'
import { convertMeasurableValue } from './units'

// Sugar provides 46 gravity points per pound, per gallon (PPPG).
// 1 pound = 16 oz (weight/mass)
// 1 gallon = 128 fl oz
// yield and efficiency should be parsed from recipe as percent values
// The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

const yieldToPotential = (fermentableYield: PercentType): GravityType => ({
  value: (fermentableYield.value * 0.01 * 46) / 1000 + 1,
  unit: 'sg',
})

const calcFermentableEfficiency = (
  type: string,
  equipmentEfficiency: number,
  sugarEfficiency = 1
) =>
  type === 'extract' || type === 'sugar' || type === 'dry extract'
    ? sugarEfficiency
    : equipmentEfficiency

const calcFermentablePotential = (fermentableYield: YieldType): GravityType => {
  if (fermentableYield.potential != null) {
    return fermentableYield.potential
  }
  if (fermentableYield.fine_grind != null) {
    return yieldToPotential(fermentableYield.fine_grind)
  }
  if (fermentableYield.coarse_grind != null) {
    return yieldToPotential(fermentableYield.coarse_grind)
  }
  return { value: 0, unit: 'sg' }
}

const calcFermentableGravityPoints = (
  fermentable: FermentableAdditionType,
  brewhouseEfficiency: PercentType = { value: 100, unit: '%' },
  attenuation: PercentType = { value: 0, unit: '%' }
) => {
  const amountValue = convertMeasurableValue(fermentable.amount, 'lb')
  const potentialValue = convertMeasurableValue(
    calcFermentablePotential(fermentable.yield),
    'sg'
  )

  const efficiencyValue: number =
    (1 - attenuation.value / 100) *
    calcFermentableEfficiency(fermentable.type, brewhouseEfficiency.value / 100)

  return (potentialValue - 1) * amountValue * efficiencyValue
}

export const calcTotalGravityPoints = (
  fermentables: Array<FermentableAdditionType>,
  efficiency: EfficiencyType,
  attenuation?: PercentType
) =>
  sum(
    fermentables.map((fermentable: FermentableAdditionType) =>
      calcFermentableGravityPoints(
        fermentable,
        efficiency.brewhouse,
        attenuation
      )
    )
  )

const calcGravity = (batchSize: VolumeType, gravityPoints: number): number => {
  return 1.0 + gravityPoints / convertMeasurableValue(batchSize, 'gal')
}

const boilGravity = (
  batchSizeInGallons: number,
  boilSizeInGallons: number,
  ogInSG: number
): number => 1 + ((ogInSG - 1) * batchSizeInGallons) / boilSizeInGallons

export const calcOriginalGravity = (
  batchSize: VolumeType,
  fermentables: Array<FermentableAdditionType>,
  efficiency: EfficiencyType
): GravityType => {
  const ogValue = calcGravity(
    batchSize,
    calcTotalGravityPoints(fermentables, efficiency)
  )
  return {
    unit: 'sg',
    value: ogValue,
  }
}

export const calcFinalGravity = (
  batchSize: VolumeType,
  fermentables: Array<FermentableAdditionType>,
  efficiency: EfficiencyType,
  cultures: Array<CultureAdditionType>
): GravityType => {
  const fgValue = calcGravity(
    batchSize,
    calcTotalGravityPoints(fermentables, efficiency, cultures[0].attenuation)
  )
  return {
    unit: 'sg',
    value: fgValue,
  }
}

export const calcBoilGravity = (
  batchSize: VolumeType,
  boilSize: VolumeType,
  OG: GravityType
): GravityType => {
  return {
    unit: 'sg',
    value: boilGravity(
      convertMeasurableValue(batchSize, 'gal'),
      convertMeasurableValue(boilSize, 'gal'),
      convertMeasurableValue(OG, 'sg')
    ),
  }
}
