import { estimateOG } from '../brewcalc'
import { spitfireRecipe } from './data/spitfireRecipe'
import { brewhouse } from './data/brewhouse'
import { recipe as AussieAle } from './data/recipe/AussieAle.js'
import { recipe as MiddyPig } from './data/recipe/Middy Pig.js'

test('estimateOG', () => {
  expect(
    estimateOG({
      recipe: AussieAle,
      batchSize: AussieAle.batchSize,
      afterBoil: true,
      includeSugars: true,
    })
  ).toBeCloseTo(1.044, 3)

  expect(
    estimateOG({
      recipe: MiddyPig,
      batchSize: MiddyPig.batchSize,
      afterBoil: true,
      includeSugars: true,
    })
  ).toBeCloseTo(1.06, 2)

  expect(
    estimateOG({
      recipe: MiddyPig,
      batchSize: 0,
      afterBoil: true,
      includeSugars: true,
    })
  ).toBe(1)

  expect(
    estimateOG({
      recipe: null,
      batchSize: MiddyPig.batchSize,
      afterBoil: true,
      includeSugars: true,
    })
  ).toBe(1)
})
