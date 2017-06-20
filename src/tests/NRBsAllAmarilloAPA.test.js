// @flow
declare var test: any;
declare var expect: any;
import { recipe, equipment } from './data/NRBsAllAmarilloAPA'
import { recipeTest } from './recipeTest'

const expected = {
  OG: 1.04,
  //40.6
  IbuTinseth: 42.4,
  //39.2
  IbuRager: 37.3,
  MashGrainWeight: 6.46,
  MashGrainAbsorbtion: 6.47,
  TotalMashWaterAdds: 29.33,
  //33.54
  MashVolumeNeeded: 33.66,
  WaterAvailFromMash: 22.85,
  SpargeVol: 17.296,
  EstPreBoilVolume: 37.12,
  BoilOffVolume: 10.18,
  PostBoilVolume: 26.937,
  CoolingShrinkage: 1.08,
  EstBottlingVol: 21.319,
  TotalWater: 46.62,
  EstABW: 0,
  //6
  EstABV: 7.1,
  EstABVRE: 7.15,
  //7.7
  ColorSRMvalue: 13.25,
  ColorEBCvalue: 26.1,

  YeastNeeded: 172.3,
  GrowthRate: 1.4,
  YeastCount: 402.2,

  KegPressure: 69.7,
  KegSugar: 38.6,
  CornSugar: 77,
  Dme: 119
}

recipeTest(expected, recipe, equipment)
