import { estimateOG, estimateFG } from '../brewcalc'
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
  ).toBeCloseTo(AussieAle.og, 3)

  expect(
    estimateOG({
      recipe: MiddyPig,
      batchSize: MiddyPig.batchSize,
      afterBoil: true,
      includeSugars: true,
    })
  ).toBeCloseTo(MiddyPig.og, 2)

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

test('estimateFG', () => {
  expect(
    estimateFG({
      recipe: MiddyPig,
      batchSize: MiddyPig.batchSize,
    })
  ).toBeCloseTo(MiddyPig.fg, 2)
  expect(
    estimateFG({
      recipe: AussieAle,
      batchSize: AussieAle.batchSize,
    })
  ).toBeCloseTo(AussieAle.fg, 2)

  expect(
    estimateFG({
      recipe: AussieAle,
      batchSize: 0.0,
    })
  ).toBeCloseTo(1, 2)
})
