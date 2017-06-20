// @flow
declare var test: any;
declare var expect: any;
import { recipe, equipment } from './data/NRBsAllAmarilloAPA.js'

import {
  gravityPoints,
  originalGravity,
  boilGravity,
  finalGravity,
  estABW,
  estABV,
  estABVrealExtract,
  yeastNeeded,
  colorSRM,
  carbonation,
  yeastCount,
  yeastStarterGrow
} from '../brewcalc'
import { calculateVolumes } from '../volumes'
import { scaleRecipe, kpaToPsi, sgToPlato } from '../utils.js'

import type { Yeast } from '../types/yeast'
import { YeastTypes, YeastForms } from '../types/yeast'

import {
  bitternessIbuTinseth,
  bitternessRatio,
  bitternessIbuRager
} from '../hops'

const expectedOG = 1.04
//40.6
const expectedIbuTinseth = 42.4
//39.2
const expectedIbuRager = 37.3
const expectedMashGrainWeight = 6.46
const expectedMashGrainAbsorbtion = 6.47
const expectedTotalMashWaterAdds = 29.33
//33.54
const expectedMashVolumeNeeded = 33.66
const expectedWaterAvailFromMash = 22.85
const expectedSpargeVol = 17.296
const expectedEstPreBoilVolume = 37.12
const expectedBoilOffVolume = 10.18
const expectedPostBoilVolume = 26.937
const expectedCoolingShrinkage = 1.08
const expectedEstBottlingVol = 21.319
const expectedTotalWater = 46.62
const expectedEstABW = 0
//6
const expectedEstABV = 7.1
const expectedEstABVRE = 7.15
//7.7
const expectedColorSRMvalue = 13.25
const expectedColorEBCvalue = 0
const expectedYeastNeeded = 0
const expectedYeastCount = 0
const expectedKegPressure = 0
const expectedKegSugar = 0
const expectedCornSugar = 0
const expectedDme = 0

test('calc NRBsAllAmarilloAPA original', () => {
  const volumes = calculateVolumes(recipe, equipment)
  const og = originalGravity(
    volumes.estPreBoilVolume,
    gravityPoints(recipe, equipment)
  )
  const bg = boilGravity(recipe.batchSize, equipment.boilSize, og)
  const ogPts = originalGravity(
    equipment.batchSize,
    gravityPoints(recipe, equipment)
  ) - 1
  const fgPts = finalGravity(
    equipment.batchSize,
    gravityPoints(recipe, equipment, recipe.yeasts[0].attenuation)
  ) - 1
  const avgBoilGravityPts = (ogPts + fgPts) / 2
  expect(og).toBeCloseTo(expectedOG, 2)
  expect(
    bitternessIbuTinseth(
      recipe,
      avgBoilGravityPts,
      equipment.batchSize + equipment.trubChillerLoss
    )
  ).toBeCloseTo(expectedIbuTinseth, 0)
  expect(
    bitternessIbuRager(
      recipe,
      bg,
      equipment.batchSize + equipment.trubChillerLoss
    )
  ).toBeCloseTo(expectedIbuRager, 0)
})

test('mashGrainWeight', () => {
  expect(calculateVolumes(recipe, equipment).mashGrainWeight).toBeCloseTo(
    expectedMashGrainWeight,
    2
  )
})
test('grainAbsorbtion', () => {
  expect(calculateVolumes(recipe, equipment).grainAbsorbtion).toBeCloseTo(
    expectedMashGrainAbsorbtion,
    2
  )
})

test('totalMashWaterAdds', () => {
  expect(calculateVolumes(recipe, equipment).totalMashWaterAdds).toBeCloseTo(
    expectedTotalMashWaterAdds,
    2
  )
})

test('mashVolumeNeeded', () => {
  expect(calculateVolumes(recipe, equipment).mashVolumeNeeded).toBeCloseTo(
    expectedMashVolumeNeeded,
    2
  )
})

test('waterAvailFromMash', () => {
  expect(calculateVolumes(recipe, equipment).waterAvailFromMash).toBeCloseTo(
    expectedWaterAvailFromMash,
    2
  )
})

test('spargeVol', () => {
  expect(calculateVolumes(recipe, equipment).spargeVol).toBeCloseTo(
    expectedSpargeVol,
    2
  )
})

test('estPreBoilVolume', () => {
  expect(calculateVolumes(recipe, equipment).estPreBoilVolume).toBeCloseTo(
    expectedEstPreBoilVolume,
    2
  )
})

test('boilOffVolume', () => {
  expect(calculateVolumes(recipe, equipment).boilOffVolume).toBeCloseTo(
    expectedBoilOffVolume,
    2
  )
})

test('postBoilVolume', () => {
  expect(calculateVolumes(recipe, equipment).postBoilVolume).toBeCloseTo(
    expectedPostBoilVolume,
    2
  )
})

test('coolingShrinkage', () => {
  expect(calculateVolumes(recipe, equipment).coolingShrinkage).toBeCloseTo(
    expectedCoolingShrinkage,
    2
  )
})

test('estBottlingVol', () => {
  expect(calculateVolumes(recipe, equipment).estBottlingVol).toBeCloseTo(
    expectedEstBottlingVol,
    2
  )
})

test('totalWater', () => {
  expect(calculateVolumes(recipe, equipment).totalWater).toBeCloseTo(
    expectedTotalWater,
    2
  )
})

test('estABW, estABV', () => {
  const ogPts = originalGravity(
    recipe.batchSize,
    gravityPoints(recipe, equipment)
  ) - 1

  const fgPts = finalGravity(
    recipe.batchSize,
    gravityPoints(recipe, equipment, recipe.yeasts[0].attenuation)
  ) - 1

  //?
  //expect(estABW(ogPts * 1000, fgPts * 1000)).toBeCloseTo(expectedEstABW, 2)

  expect(estABV(ogPts * 1000, fgPts * 1000)).toBeCloseTo(expectedEstABV, 2)
  expect(estABVrealExtract(1 + ogPts, 1 + fgPts)).toBeCloseTo(
    expectedEstABVRE,
    2
  )
})
/*
test('colorSRMvalue, srmToRgb', () => {
  const volume = equipment.batchSize

  //http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
  const colorSRMvalue = colorSRM(recipe, volume)
  const colorEBCvalue = 1.97 * colorSRMvalue

  expect(colorSRMvalue).toBeCloseTo(expectedColorSRMvalue, 1)
  expect(colorEBCvalue).toBeCloseTo(expectedColorEBCvalue, 1)
  //expect(srmToRgb(colorSRMvalue)).toBeCloseTo(16.8, 1)
})

test('yeastNeeded, yeastCount, yeastStarterGrow', () => {
  const yeast = recipe.yeasts[0]
  const batchSize = equipment.batchSize
  const pitchRate = yeast.type === YeastTypes.ale ? 0.75 : 1.5
  const gravity = expectedOG
  const starterSize = 1
  expect(yeastNeeded(pitchRate, batchSize, sgToPlato(gravity))).toBeCloseTo(
    expectedYeastNeeded,
    1
  )
  expect(yeastCount({ ...yeast })).toBeCloseTo(expectedYeastCount, 1)

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(1.4, 1)
})

test('carbonation', () => {
  const carbVolume = 2.3
  const t = 4.4
  const batchSize = equipment.batchSize
  expect(carbonation(carbVolume, t, batchSize).kegPressure).toBeCloseTo(
    kpaToPsi(expectedKegPressure),
    1
  )

  expect(carbonation(carbVolume, t, batchSize).kegSugar).toBeCloseTo(
    expectedKegSugar,
    0
  )
  expect(carbonation(carbVolume, t, batchSize).cornSugar).toBeCloseTo(
    expectedCornSugar,
    0
  )
  expect(carbonation(carbVolume, t, batchSize).dme).toBeCloseTo(expectedDme, 0)
})
*/
