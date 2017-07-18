import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import Fermentables from './Fermentables'
import Hops from './Hops'
import Yeasts from './Yeasts'
import Equipment from './Equipment'
import Stats from './Stats'
import { Grid } from 'react-bootstrap'

const Recipe = ({ recipe, equipment }) => (
    <Grid>
        <RecipeSpecs {...recipe} />
        <Fermentables {...recipe} />
        <Hops {...recipe} />
        <Yeasts {...recipe} />
        <Equipment {...equipment} />
        <Stats />
    </Grid >
)
export default Recipe