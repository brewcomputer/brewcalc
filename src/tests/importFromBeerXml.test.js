// @flow
declare var test: any;
declare var expect: any;

import type { Recipe } from '../types/recipe'

import { recipe, equipment } from './data/Kolsch'
import { importFromBeerXml } from '../importFromBeerXml'

import * as fs from 'fs'
test('importFromBeerXml', () => {
  const xmlString: string = fs.readFileSync(
    __dirname + '/data/Kolsh.xml',
    'utf8'
  )
  expect((importFromBeerXml(xmlString): Recipe)).toMatchObject(recipe)
})
