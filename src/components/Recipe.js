import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import Ingredients from './Ingredients'
import Stats from './Stats'
import MashSteps from './MashSteps'

const Recipe = ({ recipe, equipment }) =>
  recipe !== undefined &&
  <div>
    <RecipeSpecs equipment={equipment} {...recipe} />
    <Ingredients {...recipe} />
    <MashSteps {...recipe} />
    <Stats recipe={recipe} equipment={equipment} />
  </div>
export default Recipe
