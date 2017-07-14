// @flow
import React from 'react'
import Recipe from './components/Recipe'
import { recipe } from './lib/tests/data/AussieAle.js'

const App = () => (
  <div className="App">
    <Recipe recipe={recipe} />
  </div>
)

export default App
