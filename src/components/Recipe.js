import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import Ingredients from './Ingredients'
import Stats from './Stats'
import MashSteps from './MashSteps'

const Recipe = ({ recipe, equipment }) =>
  recipe !== undefined &&
  <div>
    <RecipeSpecs recipe={recipe} equipment={equipment} />
    <Ingredients recipe={recipe} />

    {equipment !== null &&
      <MashSteps recipe={recipe} equipment={equipment} />
    }
    <Stats recipe={recipe} equipment={equipment} />

  </div>
export default Recipe
