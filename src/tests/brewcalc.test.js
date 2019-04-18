// @flow

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  estABW,
  estABV,
  colorSRM,
  yeastNeeded,
  yeastCount,
  yeastStarterGrow,
  carbonation,
  srmToCss,
  calcCalories
} from '../brewcalc'

import { sgToPlato, kpaToPsi } from '../utils.js'
import { recipe as AussieAle } from './data/AussieAle.js'
import { equipment as AussieAleEquipment } from './data/AussieAle.js'
import { recipe as MuddyPig } from './data/Muddy Pig.js'
import type { Yeast } from '../types/yeast'
import { YeastTypes, YeastForms } from '../types/yeast'

declare var test: any
declare var expect: any

test('originalGravity', () => {
  const ogPtsAA = gravityPoints(AussieAle.fermentables, AussieAle.efficiency)
  const ogPtsMP = gravityPoints(MuddyPig.fermentables, MuddyPig.efficiency)

  expect(originalGravity(AussieAle.batchSize, ogPtsAA)).toBeCloseTo(1.044, 3)
  expect(originalGravity(MuddyPig.batchSize, ogPtsMP)).toBeCloseTo(1.063, 3)
})

test('finalGravity', () => {
  const fgPtsAA = gravityPoints(
    AussieAle.fermentables,
    AussieAle.efficiency,
    AussieAle.yeasts[0].attenuation
  )

  expect(finalGravity(AussieAle.batchSize, fgPtsAA)).toBeCloseTo(1.008, 2)

  const fgPtsMP = gravityPoints(
    MuddyPig.fermentables,
    MuddyPig.efficiency,
    MuddyPig.yeasts[0].attenuation
  )

  expect(finalGravity(MuddyPig.batchSize, fgPtsMP)).toBeCloseTo(1.015, 2)
})

test('boilGravity', () => {
  const ogAussieAle = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle.fermentables, AussieAle.efficiency)
  )

  expect(
    boilGravity(AussieAle.batchSize, AussieAle.boilSize, ogAussieAle)
  ).toBeCloseTo(1.031, 2)

  const ogMiddyPig = originalGravity(
    MuddyPig.batchSize,
    gravityPoints(MuddyPig.fermentables, MuddyPig.efficiency)
  )

  expect(
    boilGravity(MuddyPig.batchSize, MuddyPig.boilSize, ogMiddyPig)
  ).toBeCloseTo(1.084, 2)
})

test('estABW, estABV', () => {
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

  // ?
  expect(estABW(ogPts * 1000, fgPts * 1000)).toBeCloseTo(3.47, 2)
  // 4.7 according BeerSmith
  expect(estABV(ogPts * 1000, fgPts * 1000)).toBeCloseTo(4.36, 2)
})

test('colorSRMvalue, srmToRgb', () => {
  const volume = AussieAleEquipment.batchSize

  // http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
  const colorSRMvalue = colorSRM(AussieAle.fermentables, volume)
  const colorEBCvalue = 1.97 * colorSRMvalue

  // 8.6
  expect(colorSRMvalue).toBeCloseTo(14.7, 1)
  // 16.8
  expect(colorEBCvalue).toBeCloseTo(29.04, 1)
  // expect(srmToRgb(colorSRMvalue)).toBeCloseTo(16.8, 1)
})

test('yeastNeeded, yeastCount, yeastStarterGrow', () => {
  const yeast: Yeast = {
    name: 'German Ale',
    amount: 0.011,
    attenuation: 0,
    type: YeastTypes.ale,
    form: YeastForms.dry,
    cultureDate: '06 Mar 2017'
  }

  const batchSize = 20.82
  const pitchRate = yeast.type === YeastTypes.ale ? 0.75 : 1.5
  const gravity = 1.04
  const starterSize = 1

  expect(yeastNeeded(pitchRate, batchSize, sgToPlato(gravity))).toBeCloseTo(
    155.87,
    1
  )
  expect(yeastCount({ ...yeast })).toBeCloseTo(88, 1)
  expect(
    yeastCount({ ...yeast, form: YeastForms.liquid, amount: 1 }, '14 June 2017')
  ).toBeCloseTo(30, 1)
  expect(
    yeastCount({ ...yeast, form: YeastForms.liquid, amount: 1 }, '06 Mar 2017')
  ).toBeCloseTo(100, 1)
  expect(
    yeastCount({ ...yeast, form: YeastForms.slant, amount: 1 })
  ).toBeCloseTo(1000, 1)

  expect(() => {
    yeastCount({ ...yeast, form: YeastForms.culture, amount: 1 })
  }).toThrow()

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(1.4, 1)

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(248, 0)

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(1192423, 0)

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(1.2, 1)

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(328, 0)

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(1578336, 0)

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(0, 1)

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(488, 0)

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(2348143, 0)
})

test('carbonation', () => {
  const carbVolume = 2.4
  const t = 4.4
  const batchSize = 18.93

  expect(carbonation(carbVolume, t, batchSize).kegPressure).toBeCloseTo(
    kpaToPsi(77.15),
    1
  )

  expect(carbonation(carbVolume, t, batchSize).kegSugar).toBeCloseTo(35.7, 0)
  expect(carbonation(carbVolume, t, batchSize).cornSugar).toBeCloseTo(71.4, 0)
  expect(carbonation(carbVolume, t, batchSize).dme).toBeCloseTo(109.82, 0)
})

test('srm2css', () => {
  const cssColor = srmToCss(19.5)
  expect(cssColor).toMatchSnapshot()
})

test('calcCalories', () => {
  expect(calcCalories(1.044, 1.008)).toBeCloseTo(143.874, 3)
})
