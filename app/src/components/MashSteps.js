import React from 'react'
import { Panel, Table } from 'react-bootstrap'
import { calculateVolumes, mashRecalculate, MashType } from '../lib/brewcalc'
import CrossUnitsInput from './CrossUnitsInput'

//TODO: Add BIAB

const MashSteps = ({ recipe, equipment }) => {

    const mashStepDescription = (step) => {
        switch (step.type) {
            case MashType.decoction:
                return (<td style={{ display: 'flex' }}>Decoct&nbsp;<CrossUnitsInput value={step.decoctionAmount.toFixed(2)} unit="L" />&nbsp;of mash and boil it</td>)
            case MashType.temperature:
                if (step.infuseAmount > 0)
                    return (<td style={{ display: 'flex' }}>Add&nbsp;<CrossUnitsInput value={step.infuseStepAmount.toFixed(2)} unit="L" />&nbsp;of water and heat to&nbsp;<CrossUnitsInput value={step.infussionTemp.toFixed(0)} unit="C" /></td>)
                else
                    return (<td style={{ display: 'flex' }}>Heat to&nbsp;<CrossUnitsInput value={step.stepTemp.toFixed(0)} unit="C" />&nbsp;over&nbsp;{step.stepTime}&nbsp;min</td>)
            case MashType.infusion:
            default:
                return (<td style={{ display: 'flex' }}>Add&nbsp;<CrossUnitsInput value={step.infuseStepAmount.toFixed(2)} unit="L" />&nbsp;of water at&nbsp;<CrossUnitsInput value={step.infussionTemp.toFixed(0)} unit="C" /></td>)
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
                            {mashStepDescription(combinedMashSteps[index])}
                            <td>
                                <CrossUnitsInput value={i.stepTemp.toFixed(0)} unit="C" />
                            </td>
                            <td>{i.stepTime.toFixed(0)} min</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div style={{ display: 'flex' }}>
                <b>Sparge:&nbsp;</b>Fly sparge with&nbsp;<CrossUnitsInput value={calculatedVolumes.spargeVol.toFixed(2)} unit="L" />&nbsp;water at&nbsp;<CrossUnitsInput value={recipe.mash.spargeTemp.toFixed(0)} unit="C" />
            </div>
        </Panel>
    )
}

export default MashSteps
