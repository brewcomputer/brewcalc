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
