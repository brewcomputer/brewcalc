// @flow
import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract
} from '../brewcalc'
import { bitternessIbuTinseth } from '../hops'
import * as fs from 'fs'
import { importFromBeerXml } from '../importFromBeerXml'

declare var test: any
declare var expect: any

const xmlString: string = fs.readFileSync(
  __dirname + '/data/punk-ipa-2010-current.xml',
  'utf8'
)

const recipe = importFromBeerXml(xmlString).recipe
const expectedSpecifications = {
  og: 1.057,
  fg: 1.012,
  //ibu: 40,
  ibu: 74.4,
  color: 4.6,
  //abv: 0.056
  abv: 0.062
}
const og = originalGravity(
  recipe.batchSize,
  gravityPoints(recipe.fermentables, recipe.efficiency)
)

const fg = finalGravity(
  recipe.batchSize,
  gravityPoints(
    recipe.fermentables,
    recipe.efficiency,
    recipe.yeasts[0].attenuation || recipe.efficiency
  )
)

const trubChillerLoss = 0

const avgBoilGravityPts =
  boilGravity(recipe.batchSize + trubChillerLoss, recipe.boilSize, og) - 1

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
  color: Number(colorSRMvalue.toFixed(1)),
  abv: Number((abv / 100).toFixed(3))
}

test('specificationsTest', () => {
  expect(specifications).toEqual(expectedSpecifications)
})
