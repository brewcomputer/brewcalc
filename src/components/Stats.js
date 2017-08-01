import React from 'react'
import { ListGroup, Panel, ListGroupItem } from 'react-bootstrap'

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract,
  calcCalories
} from '../lib/brewcalc'
import { bitternessIbuTinseth } from '../lib/hops'

import { ouncesToLiters } from '../lib/utils'

const Stats = ({ recipe, equipment }) => {
  const og = originalGravity(
    equipment.batchSize,
    gravityPoints(recipe, equipment)
  )

  const fg = finalGravity(
    equipment.batchSize,
    gravityPoints(recipe, equipment, recipe.yeasts[0].attenuation)
  )

  const avgBoilGravityPts = boilGravity(
    equipment.batchSize + equipment.trubChillerLoss,
    equipment.boilSize,
    og
  ) - 1

  const ibu = bitternessIbuTinseth(
    recipe,
    avgBoilGravityPts,
    equipment.batchSize + equipment.trubChillerLoss
  )

  const colorSRMvalue = colorSRM(
    recipe,
    equipment.batchSize + equipment.trubChillerLoss
  )

  const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const calories = calcCalories(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const caloriesInOneL = calories / (12 * ouncesToLiters(1))

  return (
    <Panel header="Stats">
      <ListGroup>
        <ListGroupItem>og: {og}</ListGroupItem>
        <ListGroupItem>fg: {fg}</ListGroupItem>
        <ListGroupItem>ibu: {ibu}</ListGroupItem>
        <ListGroupItem>ibuMethod: Tinseth</ListGroupItem>
        <ListGroupItem>color: {colorSRMvalue}</ListGroupItem>
        <ListGroupItem>abv: {abv}</ListGroupItem>
        <ListGroupItem>calories: {caloriesInOneL}</ListGroupItem>
      </ListGroup>
    </Panel>
  )
}

export default Stats
