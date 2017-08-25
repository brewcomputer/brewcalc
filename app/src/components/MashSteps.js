import React from 'react'
import { Panel, Table } from 'react-bootstrap'
import { calculateVolumes, mashRecalculate, MashType } from '../../node_modules/brewcalc/lib/brewcalc.min.js'

//TODO: Add BIAB

const MashSteps = ({ recipe, equipment }) => {

    const mashStepDescription = (step) => {
        switch (step.type) {
            case MashType.decoction:
                return 'Decoct ' + step.decoctionAmount.toFixed(2) + ' L of mash and boil it'
            case MashType.temperature:
                if (step.infuseAmount > 0)
                    return 'Add ' + step.infuseStepAmount.toFixed(2) + ' L of water and heat to ' + step.infussionTemp.toFixed(0) + ' C'
                else
                    return 'Heat to ' + step.stepTemp.toFixed(0) + ' C over ' + step.stepTime + ' min'
            case MashType.infusion:
            default:
                return 'Add ' + step.infuseStepAmount.toFixed(2) + ' L of water at ' + step.infussionTemp.toFixed(0) + ' C'
        }
    }


    const calculatedVolumes = calculateVolumes(recipe, equipment)
    const calculatedMashSteps = mashRecalculate(recipe.mash, equipment, calculatedVolumes.mashGrainWeight)
    const combinedMashSteps = recipe.mash.mashSteps.map((s, i) => {
        return Object.assign({}, s, calculatedMashSteps[i])
    })

    return (
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
                    {recipe.mash.mashSteps.map((i, index) => (
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{mashStepDescription(combinedMashSteps[index])}</td>
                            <td>{i.stepTemp.toFixed(0)} C</td>
                            <td>{i.stepTime.toFixed(0)} min</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <b>Sparge:</b> Fly sparge with {calculatedVolumes.spargeVol.toFixed(2)} L water at {recipe.mash.spargeTemp.toFixed(0)} C
        </Panel>
    )
}

export default MashSteps
