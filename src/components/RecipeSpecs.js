import React from 'react'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const RecipeSpecs = ({ name, brewer, type, batchSize, boilSize, boilTime }) => (
    <Panel header="Recipe Specs">
        <ListGroup>
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>Brewer: {brewer}</ListGroupItem>
            <ListGroupItem>Type: {type}</ListGroupItem>
            <ListGroupItem>BatchSize: {batchSize} L</ListGroupItem>
            <ListGroupItem>BoilSize: {boilSize} L</ListGroupItem>
            <ListGroupItem>BoilTime: {boilTime} min</ListGroupItem>
        </ListGroup>
    </Panel>
)
export default RecipeSpecs