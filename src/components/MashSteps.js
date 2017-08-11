import React from 'react'
import { Panel, Table } from 'react-bootstrap'
import { MashType } from '../lib/types/mashStep'
import type {MashStep } from '../lib/types/mashStep'

//TODO:
//Current calculations are not correct, I need to calculate Infuse temperature and Mash initial temperature and Decoct amount according grain weigth and eq params.
//And calculation of this parts should be part of lib, but not UI

const mashStepDescription = (step: MashStep) => {
    switch (step.type) {
        case MashType.decoction:
            return 'Decoct ' + step.infuseAmount.toFixed(2) + ' of mash and boil it'
        case MashType.temperature:
            if (step.infuseAmount > 0)
                return 'Add ' + step.infuseAmount.toFixed(2) + ' of water and heat to ' + step.stepTemp.toFixed(0)
            else
                return 'Heat to ' + step.stepTemp.toFixed(0) + ' over ' + step.stepTime + ' min'
        case MashType.infusion:
        default:
            return 'Add ' + step.infuseAmount.toFixed(2) + ' of water at ' + step.stepTemp.toFixed(0)
    }
}

const MashSteps = ({ mash }) => (
    <Panel header="Mash Steps">
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Step Temperature</th>
                    <th>Step Time</th>
                </tr>
            </thead>
            <tbody>
                {mash.mashSteps.map((i, index) => (
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{mashStepDescription(i)}</td>
                        <td>{i.stepTemp.toFixed(0)} C</td>
                        <td>{i.stepTime.toFixed(0)} min</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Panel>
)

export default MashSteps
