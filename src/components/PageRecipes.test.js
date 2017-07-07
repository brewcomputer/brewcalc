import React from 'react'
import PageRecipes from './PageRecipes'
import { shallow } from 'enzyme'

it('PageRecipes must match snapshot', () => {
  const markup = shallow(<PageRecipes />)
  expect(markup).toMatchSnapshot()
})
