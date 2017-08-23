// @flow
import { recipe, equipment, specifications } from './data/Kolsch'
import { recipeOne } from './data/GenericOneHF'
import { importFromBeerXml } from '../importFromBeerXml'
import * as fs from 'fs'

declare var test: any;
declare var expect: any;

test('importFromBeerXml', () => {
  const xmlString: string = fs.readFileSync(
    __dirname + '/data/Kolsh.xml',
    'utf8'
  )
  expect(importFromBeerXml(xmlString).recipe).toEqual(recipe)
  expect(importFromBeerXml(xmlString).equipment).toEqual(equipment)
  expect(importFromBeerXml(xmlString).specifications).toEqual(specifications)
})

test('importFromBeerXmlOne', () => {
  const xmlString: string = fs.readFileSync(
    __dirname + '/data/GenericOneHF.xml',
    'utf8'
  )
  expect(importFromBeerXml(xmlString).recipe).toEqual(recipeOne)
})

test('importFromBeerXmlWithRecipeNodeOnly', () => {
  const xmlString: string = fs.readFileSync(
    __dirname + '/data/Londonpride.xml',
    'utf8'
  )
  expect(importFromBeerXml(xmlString).recipe).toBeDefined()
  expect(importFromBeerXml(xmlString).equipment).toBeNull()
})
