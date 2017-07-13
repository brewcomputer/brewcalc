import React from 'react';
import { Panel } from 'react-bootstrap';

class RecipeSpecs extends React.Component {
    render() {
        return (
            <Panel header="Recipe Specs">
                Here will be recipe specs like recipe.type, batchSize, boilSize and boilTime
            </Panel>
        )
    }
}

export default RecipeSpecs;