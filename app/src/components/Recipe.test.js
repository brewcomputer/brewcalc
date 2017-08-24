import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'

import { recipeOne as recipe } from '../lib/tests/data/GenericOneHF.js'
import { equipment } from '../lib/tests/data/Pot50L.js'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recipe recipe={recipe} equipment={equipment} />, div)
})

it('renders without crashing with null equipment', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recipe recipe={recipe} equipment={null} />, div)
})
