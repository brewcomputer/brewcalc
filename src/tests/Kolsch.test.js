// @flow
declare var test: any;
declare var expect: any;
import { recipe, equipment } from './data/Kolsch'
import { recipeTest } from './recipeTest'

const expected = {
  OG: 1.036,
  IbuTinseth: 0,
  IbuRager: 0,

  MashGrainWeight: 0,
  MashGrainAbsorbtion: 0,
  TotalMashWaterAdds: 0,
  MashVolumeNeeded: 0,
  WaterAvailFromMash: 0,
  SpargeVol: 0,
  EstPreBoilVolume: 0,
  BoilOffVolume: 0,
  PostBoilVolume: 0,
  CoolingShrinkage: 0,
  EstBottlingVol: 0,
  TotalWater: 0,

  EstABW: 0,
  EstABV: 0,
  EstABVRE: 0,

  ColorSRMvalue: 0,
  ColorEBCvalue: 0,

  YeastNeeded: 0,
  GrowthRate: 0,
  YeastCount: 0,

  KegPressure: 0,
  KegSugar: 0,
  CornSugar: 0,
  Dme: 0
}

recipeTest(expected, recipe, equipment)
