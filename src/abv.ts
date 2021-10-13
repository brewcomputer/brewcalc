import { sgToPlato } from './utils'
import { convertMeasurableValue } from './units'
import { GravityType, PercentType } from './types/beerjson'

// http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132
export const estABW = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.105
export const estABV = (ogPts: number, fgPts: number) => (ogPts - fgPts) * 0.132

// http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/
const estABVrealExtract = (og: number, fg: number): number => {
  const oe = sgToPlato(og)
  const ae = sgToPlato(fg)
  const re = 0.1808 * oe + 0.8192 * ae
  const abw = (oe - re) / (2.0665 - 0.010665 * oe)
  const abv = abw * (fg / 0.79661)

  return abv
}

export const calcABV = (og: GravityType, fg: GravityType): PercentType => {
  return {
    value: estABVrealExtract(
      convertMeasurableValue(og, 'sg'),
      convertMeasurableValue(fg, 'sg')
    ),
    unit: '%',
  }
}
