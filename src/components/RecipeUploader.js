import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'
import { Grid, FormControl, FormGroup } from 'react-bootstrap'
import { importFromBeerXml } from '../lib/importFromBeerXml'

import { recipe, equipment } from '../lib/tests/data/AussieAle.js'

const RecipeUploader = () =>
    (
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
                            ReactDOM.render(
                                <Recipe recipe={importFromBeerXml(reader.result).recipe} equipment={importFromBeerXml(reader.result).equipment} />,
                                document.getElementById('recipe')
                            )
                        }
                    }}
                />
            </FormGroup>
            Upload recipe in the BeerXml format
        <Recipe recipe={recipe} equipment={equipment} />
        </Grid >
    )

export default RecipeUploader