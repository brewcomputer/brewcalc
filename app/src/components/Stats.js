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
  srmToCss,
  bitternessIbuTinseth,
  ouncesToLiters
} from 'brewcalc'

const Stats = ({ recipe, equipment }) => {

  const { batchSize, boilSize, fermentables, hops, efficiency, yeasts } = recipe

  const trubChillerLoss = equipment !== null ? equipment.trubChillerLoss : 0

  const og = originalGravity(
    batchSize,
    gravityPoints(fermentables, efficiency)
  )

  const fg = finalGravity(
    batchSize,
    gravityPoints(fermentables, efficiency, yeasts[0].attenuation || recipe.efficiency)
  )

  const avgBoilGravityPts = boilGravity(
    batchSize + trubChillerLoss,
    boilSize,
    og
  ) - 1

  const ibu = bitternessIbuTinseth(
    hops,
    avgBoilGravityPts,
    batchSize + trubChillerLoss
  )

  const colorSRMvalue = colorSRM(
    fermentables,
    batchSize + trubChillerLoss
  )

  const abv = estABVrealExtract(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const calories = calcCalories(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const caloriesInOneL = calories / (12 * ouncesToLiters(1))

  return (
    <Panel header="Gravity, Alcohol Content and Color">
      <Row className="show-grid">
        <Col md={6}>
          <ul>
            <li title="The estimated original gravity of this recipe"><b>Original Gravity: </b>{og.toFixed(3)} SG</li>
            <li title="The estimated final gravity of this recipe"><b>Final Gravity : </b>{fg.toFixed(3)} SG</li>
            <li title="The bitterness of the recipe as measured in International Bitterness Units"><b>Bitterness (IBUs): </b>{ibu.toFixed(2)} by Tinseth formula</li>
            <li title="Estimated color of this beer">
              <b>Color: </b>{colorSRMvalue.toFixed(2)} SRM
            </li>
            <li title="The estimated alcohol by volume for this recipe"><b>Alcohol by volume : </b>{abv.toFixed(2)} %</li>
            <li title="Calories in one liter of the beer, based on original and final gravities">
              <b>Calories: </b>{caloriesInOneL.toFixed(0)} per one L
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
