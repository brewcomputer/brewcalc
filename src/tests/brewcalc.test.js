// @flow
declare var test: any;
declare var expect: any;

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  bitternessIBU,
  bitternessRatio,
  estABW,
  estABV,
  colorSRM,
  srmToRgb
} from '../brewcalc'

import { calculateVolumes } from '../volumes'

import { recipe as AussieAle } from './data/recipe/AussieAle.js'
import { recipe as MiddyPig } from './data/recipe/Middy Pig.js'

test('originalGravity', () => {
  const ogPtsAA = gravityPoints(AussieAle, AussieAle.equipment)
  const ogPtsMP = gravityPoints(MiddyPig, MiddyPig.equipment)

  expect(originalGravity(AussieAle.batchSize, ogPtsAA)).toBeCloseTo(
    AussieAle.og,
    3
  )
  expect(originalGravity(MiddyPig.batchSize, ogPtsMP)).toBeCloseTo(
    MiddyPig.og,
    3
  )
})

test('finalGravity', () => {
  const fgPtsAA = gravityPoints(
    AussieAle,
    AussieAle.equipment,
    AussieAle.yeasts[0].attenuation
  )
  expect(finalGravity(AussieAle.batchSize, fgPtsAA)).toBeCloseTo(
    AussieAle.fg,
    2
  )

  const fgPtsMP = gravityPoints(
    MiddyPig,
    MiddyPig.equipment,
    MiddyPig.yeasts[0].attenuation
  )
  expect(finalGravity(MiddyPig.batchSize, fgPtsMP)).toBeCloseTo(MiddyPig.fg, 2)
})

test('boilGravity', () => {
  const ogAussieAle = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAle.equipment)
  )
  expect(
    boilGravity(AussieAle.batchSize, AussieAle.boilSize, ogAussieAle)
  ).toBeCloseTo(1.031, 2)

  const ogMiddyPig = originalGravity(
    MiddyPig.batchSize,
    gravityPoints(MiddyPig, MiddyPig.equipment)
  )
  expect(
    boilGravity(MiddyPig.batchSize, MiddyPig.boilSize, ogMiddyPig)
  ).toBeCloseTo(1.084, 2)
})

test('mashGrainWeight', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).mashGrainWeight
  ).toBeCloseTo(5.26, 2)
})
test('grainAbsorption', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).grainAbsorption
  ).toBeCloseTo(0.66, 2)
})

test('totalMashWaterAdds', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).totalMashWaterAdds
  ).toBeCloseTo(24.45, 2)
})

test('mashVolumeNeeded', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).mashVolumeNeeded
  ).toBeCloseTo(27.97, 2)
})

test('waterAvailFromMash', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).waterAvailFromMash
  ).toBeCloseTo(23.79, 2)
})

test('spargeVol', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).spargeVol
  ).toBeCloseTo(16.36, 2)
})

test('estPreBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).estPreBoilVolume
  ).toBeCloseTo(37.12, 2)
})

test('boilOffVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).boilOffVolume
  ).toBeCloseTo(10.18, 2)
})

test('postBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).postBoilVolume
  ).toBeCloseTo(26.94, 2)
})

test('coolingShrinkage', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).coolingShrinkage
  ).toBeCloseTo(1.08, 2)
})

test('estBottlingVol', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).estBottlingVol
  ).toBeCloseTo(21.32, 2)
})

test('totalWater', () => {
  expect(
    calculateVolumes(AussieAle, AussieAle.equipment).totalWater
  ).toBeCloseTo(40.81, 2)
})

test('bitternessIBU', () => {
  const ogPts = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAle.equipment)
  ) - 1

  const fgPts = finalGravity(
    AussieAle.batchSize,
    gravityPoints(
      AussieAle,
      AussieAle.equipment,
      AussieAle.yeasts[0].attenuation
    )
  ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  const postBoilVolume = calculateVolumes(
    AussieAle,
    AussieAle.equipment
  ).postBoilVolume

  expect(
    bitternessIBU(AussieAle, avgBoilGravityPts, postBoilVolume)
    //28.0  according BeerSmith
  ).toBeCloseTo(27.21, 2)
})

test('bitternessRatio', () => {
  const ogPts = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAle.equipment)
  ) - 1

  const fgPts = finalGravity(
    AussieAle.batchSize,
    gravityPoints(
      AussieAle,
      AussieAle.equipment,
      AussieAle.yeasts[0].attenuation
    )
  ) - 1

  const avgBoilGravityPts = (ogPts + fgPts) / 2

  const postBoilVolume = calculateVolumes(
    AussieAle,
    AussieAle.equipment
  ).postBoilVolume

  const ibu = bitternessIBU(AussieAle, avgBoilGravityPts, postBoilVolume)

  const gu = ogPts * 1000
  //0.636  according BeerSmith
  expect(bitternessRatio(ibu, gu)).toBeCloseTo(0.618, 3)
})

test('estABW, estABV', () => {
  const ogPts = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAle.equipment)
  ) - 1

  const fgPts = finalGravity(
    AussieAle.batchSize,
    gravityPoints(
      AussieAle,
      AussieAle.equipment,
      AussieAle.yeasts[0].attenuation
    )
  ) - 1

  //?
  expect(estABW(ogPts * 1000, fgPts * 1000)).toBeCloseTo(3.47, 2)
  //4.7 according BeerSmith
  expect(estABV(ogPts * 1000, fgPts * 1000)).toBeCloseTo(4.36, 2)
})

test('colorSRMvalue, srmToRgb', () => {
  const volume = AussieAle.equipment.batchSize

  //http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
  const colorSRMvalue = colorSRM(AussieAle, volume)
  const colorEBCvalue = 1.97 * colorSRMvalue

  //8.6
  expect(colorSRMvalue).toBeCloseTo(14.7, 1)
  //16.8
  expect(colorEBCvalue).toBeCloseTo(29.04, 1)
  //expect(srmToRgb(colorSRMvalue)).toBeCloseTo(16.8, 1)
})
