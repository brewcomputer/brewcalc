// @flow
import {
  bitternessIbuTinseth,
  bitternessRatio,
  bitternessIbuRager
} from '../hops'
import { originalGravity, gravityPoints, finalGravity } from '../brewcalc'
import { recipe as AussieAle } from './data/AussieAle.js'
import { equipment as AussieAleEquipment } from './data/AussieAle.js'

declare var test: any
declare var expect: any

test('bitternessIbuTinseth', () => {
  const ogPts =
    originalGravity(
      AussieAle.batchSize,
      gravityPoints(AussieAle.fermentables, AussieAle.efficiency)
    ) - 1

  const fgPts =
    finalGravity(
      AussieAle.batchSize,
      gravityPoints(
        AussieAle.fermentables,
        AussieAle.efficiency,
        AussieAle.yeasts[0].attenuation
      )
    ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  expect(
    bitternessIbuTinseth(
      AussieAle.hops,
      avgBoilGravityPts,
      AussieAleEquipment.batchSize + AussieAleEquipment.trubChillerLoss
    )
  ).toBeCloseTo(28, 0)
})

test('bitternessRatio', () => {
  const ogPts =
    originalGravity(
      AussieAle.batchSize,
      gravityPoints(AussieAle.fermentables, AussieAle.efficiency)
    ) - 1

  const fgPts =
    finalGravity(
      AussieAle.batchSize,
      gravityPoints(
        AussieAle.fermentables,
        AussieAle.efficiency,
        AussieAle.yeasts[0].attenuation
      )
    ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  const ibu = bitternessIbuTinseth(
    AussieAle.hops,
    avgBoilGravityPts,
    AussieAleEquipment.batchSize + AussieAleEquipment.trubChillerLoss
  )

  const gu = ogPts * 1000

  expect(bitternessRatio(ibu, gu)).toBeCloseTo(0.64, 0)
})

test('bitternessIbuRager', () => {
  const ogPts =
    originalGravity(
      AussieAle.batchSize,
      gravityPoints(AussieAle.fermentables, AussieAle.efficiency)
    ) - 1

  const fgPts =
    finalGravity(
      AussieAle.batchSize,
      gravityPoints(
        AussieAle.fermentables,
        AussieAle.efficiency,
        AussieAle.yeasts[0].attenuation
      )
    ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  expect(
    bitternessIbuRager(
      AussieAle.hops,
      avgBoilGravityPts,
      AussieAleEquipment.batchSize + AussieAleEquipment.trubChillerLoss
    )
  ).toBeCloseTo(21, 0)
  // 22.2 by beerSmith, I suppose that there is additional ajustments depends of the Hop form
})

test('bitternessIbuRager when sgb > 1.05', () => {
  const avgBoilGravityPts = 1.06
  expect(
    bitternessIbuRager(
      AussieAle.hops,
      avgBoilGravityPts,
      AussieAleEquipment.batchSize + AussieAleEquipment.trubChillerLoss
    )
  ).toBeCloseTo(20, 0)
})
