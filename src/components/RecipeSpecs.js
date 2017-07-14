import React from 'react'
import { Panel } from 'react-bootstrap'

const RecipeSpecs = ({ type, batchSize, boilSize, boilTime }) => (
    <Panel header="Recipe Specs">
        {type}
    </Panel>
)
export default RecipeSpecs