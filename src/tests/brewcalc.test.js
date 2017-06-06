// @flow
declare var test: any;
declare var expect: any;

import {
  originalGravity,
  originalGravityPoints,
  finalGravity,
  finalGravityPoints,
  boilGravity
} from '../brewcalc'

import { calculateVolumes } from '../volumes'

import { recipe as AussieAle } from './data/recipe/AussieAle.js'
import { recipe as MiddyPig } from './data/recipe/Middy Pig.js'

test('originalGravity', () => {
  const ogPtsAA = originalGravityPoints(AussieAle, AussieAle.equipment)
  const ogPtsMP = originalGravityPoints(MiddyPig, MiddyPig.equipment)

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
  const fgPtsAA = finalGravityPoints(AussieAle, AussieAle.equipment)
  expect(finalGravity(AussieAle.batchSize, fgPtsAA)).toBeCloseTo(
    AussieAle.fg,
    2
  )

  const fgPtsMP = finalGravityPoints(MiddyPig, MiddyPig.equipment)
  expect(finalGravity(MiddyPig.batchSize, fgPtsMP)).toBeCloseTo(MiddyPig.fg, 2)
})

test('boilGravity', () => {
  const ogAussieAle = originalGravity(
    AussieAle.batchSize,
    originalGravityPoints(AussieAle, AussieAle.equipment)
  )
  expect(
    boilGravity(AussieAle.batchSize, AussieAle.boilSize, ogAussieAle)
  ).toBeCloseTo(1.031, 2)

  const ogMiddyPig = originalGravity(
    MiddyPig.batchSize,
    originalGravityPoints(MiddyPig, MiddyPig.equipment)
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
