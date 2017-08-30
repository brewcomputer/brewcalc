import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'

import { recipe } from '../data/recipe'
import { equipment } from '../data/equipment'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recipe recipe={recipe} equipment={equipment} />, div)
})

it('renders without crashing with null equipment', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recipe recipe={recipe} equipment={null} />, div)
})
