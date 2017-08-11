import React from 'react'
import { Panel, li, Row, Col } from 'react-bootstrap'

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABVrealExtract,
  calcCalories,
  srmToCss
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
    <Panel header="Gravity, Alcohol Content and Color">
      <Row className="show-grid">
        <Col md={6}>
          <ul>
            <li><b>og: </b>{og.toFixed(3)} SG</li>
            <li><b>fg: </b>{fg.toFixed(3)} SG</li>
            <li><b>ibu: </b>{ibu.toFixed(2)} IBUs</li>
            <li><b>ibuMethod: </b>Tinseth</li>
            <li>
              <b>color: </b>{colorSRMvalue.toFixed(2)} SRM
            </li>
            <li><b>abv: </b>{abv.toFixed(2)} %</li>
            <li>
              <b>calories: </b>{caloriesInOneL.toFixed(0)} per one L
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <div
            style={{
              backgroundColor: srmToCss(colorSRMvalue),
              height: 150
            }}
          />
        </Col>
      </Row>
    </Panel>
  )
}

export default Stats
