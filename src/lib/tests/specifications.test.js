// @flow
import { importFromBeerXml } from '../importFromBeerXml'
import * as fs from 'fs'

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract,
  calcCalories
} from '../brewcalc'
import { bitternessIbuTinseth } from '../hops'

import { ouncesToLiters } from '../utils'

declare var test: any;
declare var expect: any;

const xmlString: string = fs.readFileSync(
  __dirname + '/data/Kolsh.xml',
  'utf8'
)
const recipe = importFromBeerXml(xmlString).recipe
const equipment = importFromBeerXml(xmlString).equipment
const expectedSpecifications = importFromBeerXml(xmlString).specifications

const og = originalGravity(
  equipment.batchSize,
  gravityPoints(recipe, equipment)
)

const fg = finalGravity(
  equipment.batchSize,
  gravityPoints(recipe, equipment, recipe.yeasts[0].attenuation)
)

const avgBoilGravityPts = boilGravity(
  equipment.batchSize + equipment.trubChillerLoss,
  equipment.boilSize,
  og
) - 1

const ibu = bitternessIbuTinseth(
  recipe,
  avgBoilGravityPts,
  equipment.batchSize + equipment.trubChillerLoss
)

const colorSRMvalue = colorSRM(
  recipe,
  equipment.batchSize + equipment.trubChillerLoss
)

//TODO: I found that BeerSmith use rounded values for the abv and calories calculations
const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))
const calories = calcCalories(Number(og.toFixed(3)), Number(fg.toFixed(2)))

//in the breewXml we have kcal/l as expected value
const caloriesInOneL = calories / (12 * ouncesToLiters(1))

const specifications = {
  og: Number(og.toFixed(3)),
  fg: Number(fg.toFixed(2)),
  ibu: Number(ibu.toFixed(0)),
  ibuMethod: expectedSpecifications.ibuMethod,
  color: Number(colorSRMvalue.toFixed(1)),
  abv: Number((abv / 100).toFixed(3)),
  calories: Number(caloriesInOneL.toFixed(1))
}

test('specificationsTest', () => {
  expect(expectedSpecifications).toEqual(specifications)
})
