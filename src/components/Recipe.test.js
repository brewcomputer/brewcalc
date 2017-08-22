import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'

import { recipeOne as recipe } from '../lib/tests/data/GenericOneHF.js'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recipe recipe={recipe} />, div)
})
