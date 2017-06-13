// @flow
declare var test: any;
declare var expect: any;
import { recipe, equipment } from './data/NRBsAllAmarilloAPA.js'

import { gravityPoints, originalGravity } from '../brewcalc'
import { calculateVolumes } from '../volumes'

import { scaleRecipe } from '../utils.js'

test('calc NRBsAllAmarilloAPA', () => {
  const batchSize = equipment.batchSize

  const scaledRecipe = scaleRecipe(recipe, equipment)
  const volumes = calculateVolumes(scaledRecipe, equipment)
  const ogPts = gravityPoints(scaledRecipe, equipment)

  expect(originalGravity(volumes.estPreBoilVolume, ogPts)).toBeCloseTo(1.04, 2)
})
