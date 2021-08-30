import { sum } from './utils'
import { convertMeasurableValue } from './units'
import { use, boilTime } from './timing'
import {
  VolumeType,
  HopAdditionType,
  BitternessType,
  GravityType,
} from '../types/beerjson'

const alphaAcidUnits = (amountInOz: number, alphaAcid: number): number =>
  amountInOz * alphaAcid

const gravityFactor = (boilGravityValue: number): number =>
  1.65 * Math.pow(0.000125, boilGravityValue - 1)

const timeFactor = (boilTimeInMin: number): number =>
  (1 - Math.exp(-0.04 * boilTimeInMin)) / 4.15

const pelletFactor = (form: string = ''): number =>
  form === 'pellet' ? 1.1 : 1

const ibuUtilization = (
  hopForm: string = '',
  boilGravityValue: number,
  boilTimeInMin: number = 0
) =>
  pelletFactor(hopForm) *
  gravityFactor(boilGravityValue) *
  timeFactor(boilTimeInMin)

// Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
// IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
// U = bigness factor * boil time factor

// http://www.howtobrew.com/book/section-1/hops/hop-bittering-calculations

export const bitternessIbuTinseth = (
  hops: Array<HopAdditionType>,
  boilGravity: GravityType,
  postBoilVolume: VolumeType
): BitternessType => {
  const bitterness = sum(
    hops.map(({ amount, alpha_acid, form, timing }) => {
      // TODO: research needed

      if (!use(timing).add_to_boil) {
        return 0
      }

      const AAU = alphaAcidUnits(
        convertMeasurableValue(amount, 'oz'),
        alpha_acid.value
      )
      const U = ibuUtilization(
        form,
        convertMeasurableValue(boilGravity, 'sg'),
        boilTime(timing)
      )

      return (U * AAU * 74.89) / convertMeasurableValue(postBoilVolume, 'gal')
    })
  )

  return {
    value: bitterness,
    unit: 'IBUs',
  }
}

// The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity
// http://beersmith.com/blog/2009/09/26/balancing-your-beer-with-the-bitterness-ratio/
export const bitternessRatio = (ibu: number, gu: number) => ibu / gu

// rager
const ragerHopGravityAdjustment = (sgb) =>
  sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2
const ragerUtil = (time) => 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27)

const ragerHopIbu = (
  hop: HopAdditionType,
  boilGravity: GravityType,
  postBoilVolume: VolumeType
): number => {
  if (!use(hop.timing).add_to_boil) {
    return 0
  }

  const U =
    (ragerUtil(Math.floor(boilTime(hop.timing) + 0.5)) *
      pelletFactor(hop.form)) /
    100
  const AAU = alphaAcidUnits(hop.amount.value, hop.alpha_acid.value)

  return (
    (U * AAU * 74.89) /
    postBoilVolume.value /
    (1.0 + ragerHopGravityAdjustment(boilGravity.value))
  )
}

export const bitternessIbuRager = (
  hops: Array<HopAdditionType>,
  boilGravity: GravityType,
  postBoilVolume: VolumeType
): BitternessType => {
  const bitterness = sum(
    hops.map((hop: HopAdditionType) =>
      ragerHopIbu(hop, boilGravity, postBoilVolume)
    )
  )

  return {
    value: bitterness,
    unit: 'IBUs',
  }
}
