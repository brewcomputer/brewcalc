import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import renderer from 'react-test-renderer'
import { recipe } from '../lib/tests/data/AussieAle.js'
import { equipment } from '../lib/tests/data/Pot50L.js'

it('renders correctly', () => {
  const tree = renderer
    .create(<RecipeSpecs recipe={recipe} equipment={equipment} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly if equipment is null', () => {
  const tree = renderer
    .create(<RecipeSpecs recipe={recipe} equipment={null} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})