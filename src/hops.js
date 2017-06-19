// @flow
import type { Recipe } from './types/recipe'
import { sum, kgToOunces, litersToGallons } from './utils.js'
import type { Hop } from './types/hop'
import { HopForms } from './types/hop'

const ibuUtilization = (
  avgBoilGravityPts: number,
  boilTime: number,
  pelletFactor: number
) =>
  pelletFactor *
  1.65 *
  Math.pow(0.000125, avgBoilGravityPts) *
  (1 - Math.pow(Math.E, -0.04 * boilTime)) /
  4.15

//Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
//IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
//U = bigness factor * boil time factor

export const bitternessIbuTinseth = (
  { hops }: Recipe,
  avgBoilGravityPts: number,
  postBoilVolume: number
) =>
  sum(
    hops.map(
      ({ amount, alpha, form, time }) =>
        ibuUtilization(
          avgBoilGravityPts,
          time,
          form === HopForms.pellet ? 1.1 : 1
        ) *
        kgToOunces(amount) *
        alpha *
        7490 /
        litersToGallons(postBoilVolume)
    )
  )

//The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
//The Gravity Units are the decimal portion of the original gravity
export const bitternessRatio = (ibu: number, gu: number) => ibu / gu

//rager
const ragerHopGravityAdjustment = sgb => sgb <= 1.050 ? 0 : (sgb - 1.050) / 0.2
const ragerHopUtil = time => {
  if (time == 0) {
    return 0.0
  } else if (time <= 5) {
    return 0.05
  } else if (time <= 10) {
    return 0.06
  } else if (time <= 15) {
    return 0.08
  } else if (time <= 20) {
    return 0.101
  } else if (time <= 25) {
    return 0.121
  } else if (time <= 30) {
    return 0.153
  } else if (time <= 35) {
    return 0.188
  } else if (time <= 40) {
    return 0.228
  } else if (time <= 45) {
    return 0.269
  } else if (time <= 50) {
    return 0.281
  } else if (time <= 55) {
    return 0.291
  } else {
    return 0.30
  }
}

const ragerHopIbuFromWeight = (util, alpha, wt, vol, ga, wtFactor) =>
  util * alpha * wt * wtFactor / (vol * (1.0 + ga))

export const ragerHopIbu = (
  amount: number,
  alpha: number,
  time: number,
  sg: number,
  vol: number
) =>
  time <= 0.0 || amount <= 0.0 || alpha < 0.0
    ? 0
    : ragerHopIbuFromWeight(
        ragerHopUtil(Math.floor(time + 0.5)),
        alpha,
        amount,
        vol,
        ragerHopGravityAdjustment(sg),
        100.0 / 1.34
      )

export const bitternessIbuRager = (
  { hops }: Recipe,
  avgBoilGravityPts: number,
  postBoilVolume: number
) =>
  sum(
    hops.map(({ amount, alpha, time }: Hop) =>
      ragerHopIbu(
        kgToOunces(amount),
        alpha * 100,
        time,
        avgBoilGravityPts,
        litersToGallons(postBoilVolume)
      ))
  )
