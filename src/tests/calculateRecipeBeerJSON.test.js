// @flow
import { calculateRecipeBeerJSON } from '../index'
import beerJSON from './data/DryStout.json'

declare var test: any
declare var expect: any

const recipe = beerJSON.beerjson.recipes[0]

test('calculate full beerJSON recipe', () => {
  const result = calculateRecipeBeerJSON(recipe)
  expect(result).toMatchObject({
    stats: {
      og: expect.any(Number),
      fg: expect.any(Number),
      ibu: expect.any(Number),
      abv: expect.any(Number),
      color: expect.any(Number)
    },
    volumes: expect.any(Object)
  })
})

test('calculate recipe: no batch size', () => {
  const testRecipe = { ...recipe, batch_size: undefined }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: null,
      fg: null,
      ibu: null,
      abv: null,
      color: null
    },
    volumes: expect.any(Object)
  })
})

test('calculate recipe: no boil size', () => {
  const testRecipe = { ...recipe, boil_size: undefined }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: expect.any(Number),
      fg: expect.any(Number),
      ibu: null,
      abv: expect.any(Number),
      color: expect.any(Number)
    },
    volumes: null
  })
})

test('calculate recipe: no efficiency', () => {
  const testRecipe = { ...recipe, efficiency: undefined }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: null,
      fg: null,
      ibu: null,
      abv: null,
      color: null
    },
    volumes: expect.any(Object)
  })
})

test('calculate recipe: no fermentables', () => {
  const noFermentables = { ...recipe.ingredients, fermentable_bill: undefined }
  const testRecipe = { ...recipe, ingredients: noFermentables }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: null,
      fg: null,
      ibu: null,
      abv: null,
      color: null
    },
    volumes: null
  })
})

test('calculate recipe: no hops', () => {
  const noHops = { ...recipe.ingredients, hop_bill: undefined }
  const testRecipe = { ...recipe, ingredients: noHops }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: expect.any(Number),
      fg: expect.any(Number),
      ibu: null,
      abv: expect.any(Number),
      color: expect.any(Number)
    },
    volumes: expect.any(Object)
  })
})

test('calculate recipe: no yeast', () => {
  const noYeast = { ...recipe.ingredients, culture_additions: undefined }
  const testRecipe = { ...recipe, ingredients: noYeast }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: expect.any(Number),
      fg: null,
      ibu: expect.any(Number),
      abv: null,
      color: expect.any(Number)
    },
    volumes: expect.any(Object)
  })
})

test('calculate recipe: no mash', () => {
  const testRecipe = { ...recipe, mash: undefined }
  const result = calculateRecipeBeerJSON(testRecipe)
  expect(result).toMatchObject({
    stats: {
      og: expect.any(Number),
      fg: expect.any(Number),
      ibu: expect.any(Number),
      abv: expect.any(Number),
      color: expect.any(Number)
    },
    volumes: null
  })
})
