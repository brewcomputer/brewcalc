import { sum } from './utils'
import { convertMeasurableValue } from './units'
import {
  VolumeType,
  ColorType,
  FermentableAdditionType,
} from './types/beerjson'

// MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
const mcu2srm = (mcu: number): number => 1.4922 * Math.pow(mcu, 0.6859)

const calcMCU = (amount: number, color: number): number =>
  color > 0.56 ? amount * color : 0

export const calcColor = (
  fermentables: Array<FermentableAdditionType>,
  postBoilVolume: VolumeType
): ColorType => {
  const fermentablesMCU: number[] = fermentables.map(
    (fermentable: FermentableAdditionType) => {
      return calcMCU(
        convertMeasurableValue(fermentable.amount, 'lb'),
        convertMeasurableValue(fermentable.color, 'Lovi')
      )
    }
  )

  const colorSRM = mcu2srm(
    sum(fermentablesMCU) / convertMeasurableValue(postBoilVolume, 'gal')
  )

  return {
    unit: 'SRM',
    value: colorSRM,
  }
}

export const srmToRgb = (srm: number): { r: number; g: number; b: number } => ({
  r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
  g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
  b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm)))),
})

export const srmToCss = (srm: number): string => {
  const color = srmToRgb(srm)

  return `rgb(${color.r}, ${color.g}, ${color.b})`
}
