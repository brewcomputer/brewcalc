import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import renderer from 'react-test-renderer'
import { recipe } from '../lib/tests/data/AussieAle.js'

it('renders correctly', () => {
    const tree = renderer.create(
        <RecipeSpecs {...recipe} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})