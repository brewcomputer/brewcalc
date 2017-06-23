// @flow
declare var test: any;
declare var expect: any;

import { recipe, equipment, specifications } from './data/Kolsch'
import { importFromBeerXml } from '../importFromBeerXml'

import * as fs from 'fs'
test('importFromBeerXml', () => {
  const xmlString: string = fs.readFileSync(
    __dirname + '/data/Kolsh.xml',
    'utf8'
  )
  expect(importFromBeerXml(xmlString).recipe).toMatchObject(recipe)
  expect(importFromBeerXml(xmlString).equipment).toMatchObject(equipment)
  expect(importFromBeerXml(xmlString).specifications).toMatchObject(
    specifications
  )
})
