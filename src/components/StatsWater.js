import React from 'react'
import { ListGroup, Panel, ListGroupItem } from 'react-bootstrap'
import { calculateVolumes } from '../lib/volumes'

const StatsWater = ({ recipe, equipment }) => {
    const volumes = calculateVolumes(recipe, equipment)
    return (
        <Panel header="Water Stats">
            <ListGroup>
                <ListGroupItem>mashGrainWeight: {volumes.mashGrainWeight.toFixed(2)} kg</ListGroupItem>
                <ListGroupItem>grainAbsorbtion: {volumes.grainAbsorbtion.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>totalMashWaterAdds: {volumes.totalMashWaterAdds.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>mashVolumeNeeded: {volumes.mashVolumeNeeded.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>waterAvailFromMash: {volumes.waterAvailFromMash.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>spargeVol: {volumes.spargeVol.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>estPreBoilVolume: {volumes.estPreBoilVolume.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>boilOffVolume: {volumes.boilOffVolume.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>postBoilVolume: {volumes.postBoilVolume.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>coolingShrinkage: {volumes.coolingShrinkage.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>estBottlingVol: {volumes.estBottlingVol.toFixed(2)} L</ListGroupItem>
                <ListGroupItem>totalWater: {volumes.totalWater.toFixed(2)} L</ListGroupItem>
            </ListGroup>
        </Panel>)
}

export default StatsWater