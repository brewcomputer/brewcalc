import React from 'react'
import Recipe from './Recipe'
import { Grid, FormControl, FormGroup } from 'react-bootstrap'
import { importFromBeerXml } from '../lib/importFromBeerXml'

import { recipe, equipment } from '../lib/tests/data/AussieAle.js'

const RecipeUploader = () => (
    <Grid>
        <FormGroup>
            <FormControl
                id="formControlsFile"
                type="file"
                label="File"
                onChange={(e) => {
                    const reader = new FileReader()
                    reader.readAsText(e.target.files[0])
                    reader.onloadend = function () {
                        console.log(importFromBeerXml(reader.result).recipe)
                    }
                }}
            />
        </FormGroup>
        Upload recipe in the BeerXml format

        {recipe !== undefined &&
            <Recipe recipe={recipe} equipment={equipment} />
        }
    </Grid >
)
export default RecipeUploader