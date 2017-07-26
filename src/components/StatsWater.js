import React from 'react'
import { ListGroup, Panel, ListGroupItem } from 'react-bootstrap'
import { calculateVolumes } from '../lib/volumes'

const StatsWater = ({ recipe, equipment }) => {
    const volumes = calculateVolumes(recipe, equipment)
    return (
        <Panel header="Water Stats">
            <ListGroup>
                <ListGroupItem>mashGrainWeight: {volumes.mashGrainWeight}</ListGroupItem>
                <ListGroupItem>grainAbsorbtion: {volumes.grainAbsorbtion}</ListGroupItem>
                <ListGroupItem>totalMashWaterAdds: {volumes.totalMashWaterAdds}</ListGroupItem>
                <ListGroupItem>mashVolumeNeeded: {volumes.mashVolumeNeeded}</ListGroupItem>
                <ListGroupItem>waterAvailFromMash: {volumes.waterAvailFromMash}</ListGroupItem>
                <ListGroupItem>spargeVol: {volumes.spargeVol}</ListGroupItem>
                <ListGroupItem>estPreBoilVolume: {volumes.estPreBoilVolume}</ListGroupItem>
                <ListGroupItem>boilOffVolume: {volumes.boilOffVolume}</ListGroupItem>
                <ListGroupItem>postBoilVolume: {volumes.postBoilVolume}</ListGroupItem>
                <ListGroupItem>coolingShrinkage: {volumes.coolingShrinkage}</ListGroupItem>
                <ListGroupItem>estBottlingVol: {volumes.estBottlingVol}</ListGroupItem>
                <ListGroupItem>totalWater: {volumes.totalWater}</ListGroupItem>
            </ListGroup>
        </Panel>)
}

export default StatsWater