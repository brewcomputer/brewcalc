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
  carbonation
} from '../brewcalc'

import { sgToPlato, kpaToPsi } from '../utils.js'

import { calculateVolumes } from '../volumes'

import { recipe as AussieAle } from './data/AussieAle.js'
import { equipment as AussieAleEquipment } from './data/AussieAle.js'
import { recipe as MuddyPig } from './data/Muddy Pig.js'
import { equipment as MuddyPigEquipment } from './data/Muddy Pig.js'
import type { Yeast } from '../types/yeast'
import { YeastTypes, YeastForms } from '../types/yeast'

declare var test: any;
declare var expect: any;

test('originalGravity', () => {
  const ogPtsAA = gravityPoints(AussieAle, AussieAleEquipment)
  const ogPtsMP = gravityPoints(MuddyPig, MuddyPigEquipment)

  expect(originalGravity(AussieAle.batchSize, ogPtsAA)).toBeCloseTo(1.044, 3)
  expect(originalGravity(MuddyPig.batchSize, ogPtsMP)).toBeCloseTo(1.063, 3)
})

test('finalGravity', () => {
  const fgPtsAA = gravityPoints(
    AussieAle,
    AussieAleEquipment,
    AussieAle.yeasts[0].attenuation
  )
  expect(finalGravity(AussieAle.batchSize, fgPtsAA)).toBeCloseTo(1.008, 2)

  const fgPtsMP = gravityPoints(
    MuddyPig,
    MuddyPigEquipment,
    MuddyPig.yeasts[0].attenuation
  )
  expect(finalGravity(MuddyPig.batchSize, fgPtsMP)).toBeCloseTo(1.015, 2)
})

test('boilGravity', () => {
  const ogAussieAle = originalGravity(
    AussieAle.batchSize,
    gravityPoints(AussieAle, AussieAleEquipment)
  )
  expect(
    boilGravity(AussieAle.batchSize, AussieAle.boilSize, ogAussieAle)
  ).toBeCloseTo(1.031, 2)

  const ogMiddyPig = originalGravity(
    MuddyPig.batchSize,
    gravityPoints(MuddyPig, MuddyPigEquipment)
  )
  expect(
    boilGravity(MuddyPig.batchSize, MuddyPig.boilSize, ogMiddyPig)
  ).toBeCloseTo(1.084, 2)
})

test('mashGrainWeight', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).mashGrainWeight
  ).toBeCloseTo(5.26, 2)
})
test('grainAbsorbtion', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).grainAbsorbtion
  ).toBeCloseTo(5.27, 2)
})

test('totalMashWaterAdds', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).totalMashWaterAdds
  ).toBeCloseTo(24.45, 2)
})

test('mashVolumeNeeded', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).mashVolumeNeeded
  ).toBeCloseTo(27.97, 2)
})

test('waterAvailFromMash', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).waterAvailFromMash
  ).toBeCloseTo(19.17, 2)
})

test('spargeVol', () => {
  expect(calculateVolumes(AussieAle, AussieAleEquipment).spargeVol).toBeCloseTo(
    20.97,
    1
  )
})

test('estPreBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).estPreBoilVolume
  ).toBeCloseTo(37.12, 2)
})

test('boilOffVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).boilOffVolume
  ).toBeCloseTo(10.18, 2)
})

test('postBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).postBoilVolume
  ).toBeCloseTo(26.94, 2)
})

test('coolingShrinkage', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).coolingShrinkage
  ).toBeCloseTo(1.08, 2)
})

test('estBottlingVol', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).estBottlingVol
  ).toBeCloseTo(21.32, 2)
})

test('totalWater', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).totalWater
  ).toBeCloseTo(45.42, 2)
})

test('estABW, estABV', () => {
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

  //?
  expect(estABW(ogPts * 1000, fgPts * 1000)).toBeCloseTo(3.47, 2)
  //4.7 according BeerSmith
  expect(estABV(ogPts * 1000, fgPts * 1000)).toBeCloseTo(4.36, 2)
})

test('colorSRMvalue, srmToRgb', () => {
  const volume = AussieAleEquipment.batchSize

  //http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
  const colorSRMvalue = colorSRM(AussieAle, volume)
  const colorEBCvalue = 1.97 * colorSRMvalue

  //8.6
  expect(colorSRMvalue).toBeCloseTo(14.7, 1)
  //16.8
  expect(colorEBCvalue).toBeCloseTo(29.04, 1)
  //expect(srmToRgb(colorSRMvalue)).toBeCloseTo(16.8, 1)
})

test('yeastNeeded, yeastCount, yeastStarterGrow', () => {
  const yeast: Yeast = {
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

  expect(carbonation(carbVolume, t, batchSize).kegSugar).toBeCloseTo(35.70, 0)
  expect(carbonation(carbVolume, t, batchSize).cornSugar).toBeCloseTo(71.40, 0)
  expect(carbonation(carbVolume, t, batchSize).dme).toBeCloseTo(109.82, 0)
})
