// @flow
import { importFromBeerXml } from '../importFromBeerXml'
import * as fs from 'fs'

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract
} from '../brewcalc'
import { bitternessIbuTinseth } from '../hops'

declare var test: any;
declare var expect: any;

const xmlString: string = fs.readFileSync(
  __dirname + '/data/RRSummerBitter.xml',
  'utf8'
)
const recipe = importFromBeerXml(xmlString).recipe
const equipment = importFromBeerXml(xmlString).equipment
//const expectedSpecifications = {
//  og: 1.047,
//  fg: 1.013,
//  ibu: 34.2,
//  ibuMethod: 'Tinseth',
//  color: 6.8,
//  abv: 0.044
//}
const expectedSpecifications = {
  og: 1.047,
  fg: 1.012,
  ibu: 34.3,
  ibuMethod: 'Tinseth',
  color: 6.8,
  abv: 0.049
}
const og = originalGravity(
  recipe.batchSize,
  gravityPoints(recipe.fermentables, recipe.efficiency)
)

const fg = finalGravity(
  recipe.batchSize,
  gravityPoints(recipe.fermentables, recipe.efficiency, recipe.yeasts[0].attenuation)
)

const trubChillerLoss = equipment !== null ? equipment.trubChillerLoss : 0

const avgBoilGravityPts = boilGravity(
  recipe.batchSize + trubChillerLoss,
  recipe.boilSize,
  og
) - 1

const ibu = bitternessIbuTinseth(
  recipe.hops,
  avgBoilGravityPts,
  recipe.batchSize + trubChillerLoss
)

const colorSRMvalue = colorSRM(
  recipe.fermentables,
  recipe.batchSize + trubChillerLoss
)

const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))

const specifications = {
  og: Number(og.toFixed(3)),
  fg: Number(fg.toFixed(3)),
  ibu: Number(ibu.toFixed(1)),
  ibuMethod: expectedSpecifications.ibuMethod,
  color: Number(colorSRMvalue.toFixed(1)),
  abv: Number((abv / 100).toFixed(3))
}


test('specificationsTest', () => {
  expect(specifications).toEqual(expectedSpecifications)
})