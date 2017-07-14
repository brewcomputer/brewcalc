import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import Fermentables from './Fermentables'
import Hops from './Hops'
import Yeasts from './Yeasts'
import Equipment from './Equipment'
import Stats from './Stats'
import { Grid, PageHeader, FormControl, FormGroup } from 'react-bootstrap'

const Recipe = ({ recipe }) => (
    <Grid>
        <PageHeader> {recipe.name} <small> by {recipe.brewer}</small></PageHeader>
        <RecipeSpecs {...recipe} />
        <Fermentables />
        <Hops />
        <Yeasts />
        <Equipment />
        <Stats />
        <FormGroup>
            <FormControl
                id="formControlsFile"
                type="file"
                label="File"
            />
        </FormGroup>
        Upload recipe in the BeerXml format
    </Grid >
)
export default Recipe