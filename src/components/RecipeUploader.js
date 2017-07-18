import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'
import { Grid, FormControl, FormGroup } from 'react-bootstrap'
import { importFromBeerXml } from '../lib/importFromBeerXml'

let recipe = undefined
let equipment = undefined

const RecipeUploader = () => {

    const recipeContainer = <Recipe recipe={recipe} equipment={equipment} />

    return (
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
                            recipe = importFromBeerXml(reader.result).recipe
                            equipment = importFromBeerXml(reader.result).equipment

                            ReactDOM.render(
                                <Recipe recipe={recipe} equipment={equipment} />,
                                document.getElementById('root')
                            )
                        }
                    }}
                />
            </FormGroup>
            Upload recipe in the BeerXml format

        {recipe !== undefined && recipeContainer}
        </Grid >
    )
}
export default RecipeUploader