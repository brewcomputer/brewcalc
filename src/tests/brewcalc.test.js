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
