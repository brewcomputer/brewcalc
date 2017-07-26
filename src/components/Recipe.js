import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import Fermentables from './Fermentables'
import Hops from './Hops'
import Yeasts from './Yeasts'
import Equipment from './Equipment'
import Stats from './Stats'
import StatsWater from './StatsWater'
import { Grid } from 'react-bootstrap'

const Recipe = ({ recipe, equipment }) => (
    <Grid id="recipe">
        {recipe !== undefined &&
            <div>
                < RecipeSpecs {...recipe} />
                <Fermentables {...recipe} />
                <Hops {...recipe} />
                <Yeasts {...recipe} />
                <Equipment {...equipment} />
                <Stats recipe={recipe} equipment={equipment} />
                <StatsWater recipe={recipe} equipment={equipment} />
            </div>
        }
    </Grid >
)
export default Recipe