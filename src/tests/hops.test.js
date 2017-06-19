// @flow
declare var test: any;
declare var expect: any;
import { bitternessIBU, bitternessRatio } from '../hops'
import { originalGravity, gravityPoints, finalGravity } from '../brewcalc'
import { calculateVolumes } from '../volumes'
import { recipe as AussieAle } from './data/AussieAle.js'
import { equipment as AussieAleEquipment } from './data/AussieAle.js'

test('bitternessIBU', () => {
  const ogPts = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAleEquipment)
  ) - 1

  const fgPts = finalGravity(
    AussieAle.batchSize,
    gravityPoints(
      AussieAle,
      AussieAleEquipment,
      AussieAle.yeasts[0].attenuation
    )
  ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  const postBoilVolume = calculateVolumes(
    AussieAle,
    AussieAleEquipment
  ).postBoilVolume

  expect(
    bitternessIBU(AussieAle, avgBoilGravityPts, postBoilVolume)
    //28.0  according BeerSmith
  ).toBeCloseTo(27.21, 2)
})

test('bitternessRatio', () => {
  const ogPts = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAleEquipment)
  ) - 1

  const fgPts = finalGravity(
    AussieAle.batchSize,
    gravityPoints(
      AussieAle,
      AussieAleEquipment,
      AussieAle.yeasts[0].attenuation
    )
  ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  const postBoilVolume = calculateVolumes(
    AussieAle,
    AussieAleEquipment
  ).postBoilVolume

  const ibu = bitternessIBU(AussieAle, avgBoilGravityPts, postBoilVolume)

  const gu = ogPts * 1000
  //0.636  according BeerSmith
  expect(bitternessRatio(ibu, gu)).toBeCloseTo(0.618, 3)
})
