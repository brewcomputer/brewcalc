// @flow
import { sum, kgToOunces, litersToGallons } from './utils.js'
import type { Hop } from './types/hop'
import { HopForms, HopUse } from './types/hop'

const aromaFactor = use =>
  use === HopUse.aroma || use === HopUse.dryHop ? 0 : 1

const ibuUtilization = (
  avgBoilGravityPts: number,
  boilTime: number,
  pelletFactor: number
) =>
  (pelletFactor *
    1.65 *
    Math.pow(0.000125, avgBoilGravityPts) *
    (1 - Math.pow(Math.E, -0.04 * boilTime))) /
  4.15

// Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
// IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
// U = bigness factor * boil time factor

export const bitternessIbuTinseth = (
  hops: Array<Hop>,
  avgBoilGravityPts: number,
  postBoilVolume: number
) =>
  sum(
    hops.map(
      ({ amount, alpha, form, time, use }) =>
        ((ibuUtilization(
          avgBoilGravityPts,
          time,
          form === HopForms.pellet ? 1.1 : 1
        ) *
          kgToOunces(amount) *
          alpha *
          7490) /
          litersToGallons(postBoilVolume)) *
        aromaFactor(use)
    )
  )

// The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity
export const bitternessRatio = (ibu: number, gu: number) => ibu / gu

// rager
const ragerHopGravityAdjustment = sgb => (sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2)
const ragerUtil = time => 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27)

const ragerHopIbuFromWeight = (util, alpha, wt, vol, ga, wtFactor) =>
  (util * alpha * wt * wtFactor) / (vol * (1.0 + ga))

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
        ragerUtil(Math.floor(time + 0.5)) * 0.01,
        alpha,
        amount,
        vol,
        ragerHopGravityAdjustment(sg),
        100.0 / 1.34
      )

export const bitternessIbuRager = (
  hops: Array<Hop>,
  avgBoilGravityPts: number,
  postBoilVolume: number
) =>
  sum(
    hops.map(
      ({ amount, alpha, time, use }: Hop) =>
        ragerHopIbu(
          kgToOunces(amount),
          alpha * 100,
          time,
          avgBoilGravityPts,
          litersToGallons(postBoilVolume)
        ) * aromaFactor(use)
    )
  )
