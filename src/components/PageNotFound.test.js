import React from 'react'
import PageNotFound from './PageNotFound'
import {shallow} from 'enzyme'

it('PageNotFound must match snapshot', () => {
  const markup = shallow(<PageNotFound />)
  expect(markup).toMatchSnapshot()
})
