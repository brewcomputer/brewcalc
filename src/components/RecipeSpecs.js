import React from 'react'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const RecipeSpecs = ({ name, brewer, type, batchSize, boilSize, boilTime }) => (
    <Panel header="Recipe Specs">
        <ListGroup>
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>Brewer: {brewer}</ListGroupItem>
            <ListGroupItem>Type: {type}</ListGroupItem>
            <ListGroupItem>BatchSize: {batchSize}</ListGroupItem>
            <ListGroupItem>BoilSize: {boilSize}</ListGroupItem>
            <ListGroupItem>BoilTime: {boilTime}</ListGroupItem>
        </ListGroup>
    </Panel>
)
export default RecipeSpecs