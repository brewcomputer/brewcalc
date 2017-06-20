// @flow
declare var test: any;
declare var expect: any;
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

import type { Recipe } from '../types/recipe'
import type { Equipment } from '../types/equipment'

import {
  bitternessIbuTinseth,
  bitternessRatio,
  bitternessIbuRager
} from '../hops'

export const recipeTest = (
  expected: any,
  recipe: Recipe,
  equipment: Equipment
) => {
  test('calc ' + recipe.name, () => {
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
    expect(og).toBeCloseTo(expected.OG, 2)
    expect(
      bitternessIbuTinseth(
        recipe,
        avgBoilGravityPts,
        equipment.batchSize + equipment.trubChillerLoss
      )
    ).toBeCloseTo(expected.IbuTinseth, 0)
    expect(
      bitternessIbuRager(
        recipe,
        bg,
        equipment.batchSize + equipment.trubChillerLoss
      )
    ).toBeCloseTo(expected.IbuRager, 0)
  })

  test('mashGrainWeight', () => {
    expect(calculateVolumes(recipe, equipment).mashGrainWeight).toBeCloseTo(
      expected.MashGrainWeight,
      2
    )
  })
  test('grainAbsorbtion', () => {
    expect(calculateVolumes(recipe, equipment).grainAbsorbtion).toBeCloseTo(
      expected.MashGrainAbsorbtion,
      2
    )
  })

  test('totalMashWaterAdds', () => {
    expect(calculateVolumes(recipe, equipment).totalMashWaterAdds).toBeCloseTo(
      expected.TotalMashWaterAdds,
      2
    )
  })

  test('mashVolumeNeeded', () => {
    expect(calculateVolumes(recipe, equipment).mashVolumeNeeded).toBeCloseTo(
      expected.MashVolumeNeeded,
      2
    )
  })

  test('waterAvailFromMash', () => {
    expect(calculateVolumes(recipe, equipment).waterAvailFromMash).toBeCloseTo(
      expected.WaterAvailFromMash,
      2
    )
  })

  test('spargeVol', () => {
    expect(calculateVolumes(recipe, equipment).spargeVol).toBeCloseTo(
      expected.SpargeVol,
      2
    )
  })

  test('estPreBoilVolume', () => {
    expect(calculateVolumes(recipe, equipment).estPreBoilVolume).toBeCloseTo(
      expected.EstPreBoilVolume,
      2
    )
  })

  test('boilOffVolume', () => {
    expect(calculateVolumes(recipe, equipment).boilOffVolume).toBeCloseTo(
      expected.BoilOffVolume,
      2
    )
  })

  test('postBoilVolume', () => {
    expect(calculateVolumes(recipe, equipment).postBoilVolume).toBeCloseTo(
      expected.PostBoilVolume,
      2
    )
  })

  test('coolingShrinkage', () => {
    expect(calculateVolumes(recipe, equipment).coolingShrinkage).toBeCloseTo(
      expected.CoolingShrinkage,
      2
    )
  })

  test('estBottlingVol', () => {
    expect(calculateVolumes(recipe, equipment).estBottlingVol).toBeCloseTo(
      expected.EstBottlingVol,
      2
    )
  })

  test('totalWater', () => {
    expect(calculateVolumes(recipe, equipment).totalWater).toBeCloseTo(
      expected.TotalWater,
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

    expect(estABV(ogPts * 1000, fgPts * 1000)).toBeCloseTo(expected.EstABV, 2)
    expect(estABVrealExtract(1 + ogPts, 1 + fgPts)).toBeCloseTo(
      expected.EstABVRE,
      2
    )
  })

  test('colorSRMvalue, srmToRgb', () => {
    const volume = equipment.batchSize

    //http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
    const colorSRMvalue = colorSRM(recipe, volume)
    const colorEBCvalue = 1.97 * colorSRMvalue

    expect(colorSRMvalue).toBeCloseTo(expected.ColorSRMvalue, 1)
    expect(colorEBCvalue).toBeCloseTo(expected.ColorEBCvalue, 1)
  })

  test('yeastNeeded, yeastCount, yeastStarterGrow', () => {
    const yeast = recipe.yeasts[0]
    const batchSize = equipment.batchSize
    const pitchRate = yeast.type === YeastTypes.ale ? 0.75 : 1.5
    const gravity = expected.OG
    const starterSize = 1
    expect(yeastNeeded(pitchRate, batchSize, sgToPlato(gravity))).toBeCloseTo(
      expected.YeastNeeded,
      1
    )
    expect(yeastCount({ ...yeast })).toBeCloseTo(expected.YeastCount, 1)

    expect(
      yeastStarterGrow(88, starterSize, gravity, batchSize).growthRate
    ).toBeCloseTo(expected.GrowthRate, 1)
  })

  test('carbonation', () => {
    const carbVolume = 2.3
    const t = 4.4
    const batchSize = equipment.batchSize

    expect(carbonation(carbVolume, t, batchSize).kegPressure).toBeCloseTo(
      kpaToPsi(expected.KegPressure),
      1
    )

    expect(carbonation(carbVolume, t, batchSize).kegSugar).toBeCloseTo(
      expected.KegSugar,
      0
    )
    expect(carbonation(carbVolume, t, batchSize).cornSugar).toBeCloseTo(
      expected.CornSugar,
      0
    )
    expect(carbonation(carbVolume, t, batchSize).dme).toBeCloseTo(
      expected.Dme,
      0
    )
  })
}
