import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import renderer from 'react-test-renderer'
import { recipe } from '../lib/tests/data/AussieAle.js'
import { equipment } from '../lib/tests/data/Pot50L.js'

it('renders correctly', () => {
  const tree = renderer
    .create(<RecipeSpecs equipment={equipment} {...recipe} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
