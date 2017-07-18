import React from 'react'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const Equipment = ({ name, batchSize, boilSize, efficiency, evapRate, coolingLossPct, trubChillerLoss, lauterDeadspace, topUpKettle, BIAB }) => (
    <Panel header="Equipment">
        <ListGroup>
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>BatchSize: {batchSize}</ListGroupItem>
            <ListGroupItem>BoilSize: {boilSize}</ListGroupItem>
            <ListGroupItem>Efficiency: {efficiency}</ListGroupItem>
            <ListGroupItem>EvapRate: {evapRate}</ListGroupItem>
            <ListGroupItem>CoolingLossPct: {coolingLossPct}</ListGroupItem>
            <ListGroupItem>TrubChillerLoss: {trubChillerLoss}</ListGroupItem>
            <ListGroupItem>LauterDeadspace: {lauterDeadspace}</ListGroupItem>
            <ListGroupItem>TopUpKettle: {topUpKettle}</ListGroupItem>
            <ListGroupItem>BIAB: {BIAB.toString()}</ListGroupItem>
        </ListGroup>
    </Panel>
)

export default Equipment