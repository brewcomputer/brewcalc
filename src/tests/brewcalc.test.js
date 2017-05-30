import {
  estimateOriginalGravity,
  estimateFinalGravity,
  getBoilGravity,
  bitterness,
  calcIBU,
} from '../brewcalc'

import {
  calcWater,
  totalGrains,
  totalMashGrains,
  totalMashWater,
  vaterAvailableFromMash,
  mashVolumeNeeded,
  spargeVol,
} from '../volumes'

import { recipe as AussieAle } from './data/recipe/AussieAle.js'
import { recipe as MiddyPig } from './data/recipe/Middy Pig.js'

test('originalGravity', () => {
  expect(estimateOriginalGravity(AussieAle)).toBeCloseTo(AussieAle.og, 3)
  expect(estimateOriginalGravity(MiddyPig)).toBeCloseTo(MiddyPig.og, 3)
  expect(estimateOriginalGravity(null)).toBe(1)
})

test('finalGravity', () => {
  expect(estimateFinalGravity(MiddyPig)).toBeCloseTo(MiddyPig.fg, 2)
  expect(estimateFinalGravity(AussieAle)).toBeCloseTo(AussieAle.fg, 2)
  expect(estimateOriginalGravity(null)).toBe(1)
})

test('boilGravity', () => {
  expect(getBoilGravity(AussieAle)).toBeCloseTo(1.031, 2)
  expect(getBoilGravity(MiddyPig)).toBeCloseTo(1.084, 2)
})

test('totalGrains', () => {
  expect(totalGrains(MiddyPig).toFixed(2)).toBe('4.35')
  expect(totalGrains(AussieAle).toFixed(2)).toBe('5.53')
})

test('totalMashGrains', () => {
  expect(totalMashGrains(MiddyPig).toFixed(2)).toBe('0.68')
  expect(totalMashGrains(AussieAle).toFixed(2)).toBe('5.26')
})

test('totalMashWater', () => {
  expect(totalMashWater(MiddyPig)).toBe(0)
  expect(totalMashWater(AussieAle).toFixed(2)).toBe('24.45')
})

test('vaterAvailableFromMash', () => {
  //23.79
  expect(vaterAvailableFromMash(AussieAle).toFixed(2)).toBe('23.76')
})

test('spargeVol', () => {
  //16.36
  expect(spargeVol(AussieAle).toFixed(2)).toBe('16.39')
})

test('calcWaterMiddyPig', () => {
  const calcResults = calcWater({
    batchSize: MiddyPig.equipment.batchSize,
    totalGrains: totalMashGrains(MiddyPig),
    boilTime: MiddyPig.equipment.batchSize,
    evapRate: MiddyPig.equipment.evapRate,
    coolingLossPct: MiddyPig.equipment.coolingLossPct,
  })

  expect(calcResults).toBeDefined()
  expect(calcResults.grainAbsLoss.toFixed(2)).toBe('0.09')

  //expect(calcResults.totalWater).toBeCloseTo(13.635, 3)

  //expect(calcResults.preBoilWaterVol).toBeCloseTo(11.375, 3)

  //expect(calcResults.postBoilVol).toBeCloseTo(10.2, 3)

  //expect(calcResults.hotPostBoilVol).toBeCloseTo(10.625, 3)
})

test('calcWaterAussieAle', () => {
  const calcResults = calcWater({
    batchSize: AussieAle.equipment.batchSize,
    totalGrains: totalMashGrains(AussieAle),
    boilTime: AussieAle.equipment.batchSize,
    evapRate: AussieAle.equipment.evapRate,
    coolingLossPct: AussieAle.equipment.coolingLossPct,
  })

  expect(calcResults).toBeDefined()

  expect(calcResults.grainAbsLoss.toFixed(2)).toBe('0.68')

  //expect(calcResults.totalWater).toBeCloseTo(13.635, 3)

  //expect(calcResults.preBoilWaterVol).toBeCloseTo(11.375, 3)

  //expect(calcResults.postBoilVol).toBeCloseTo(10.2, 3)

  //expect(calcResults.hotPostBoilVol).toBeCloseTo(10.625, 3)
})
