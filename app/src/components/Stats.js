import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import CrossUnitsInput from './CrossUnitsInput'

import {
  originalGravity,
  finalGravity,
  gravityPoints,
  boilGravity,
  colorSRM,
  estABV,
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

  const abv = estABV(og, fg) * 1000
  const calories = calcCalories(Number(og.toFixed(3)), Number(fg.toFixed(2)))
  const caloriesInOneL = calories / (12 * ouncesToLiters(1))

  return (
    <Panel header="Gravity, Alcohol Content and Color">
      <Row className="show-grid">
        <Col md={6}>
          <div>
            <CrossUnitsInput description="The estimated original gravity of this recipe" name="Original Gravity" value={og.toFixed(3)} unit="SG" />
            <CrossUnitsInput description="The estimated final gravity of this recipe" name="Final Gravity" value={fg.toFixed(3)} unit="SG" />
            <div title="The bitterness of the recipe as measured in International Bitterness Units"><b>Bitterness (IBUs): </b>{ibu.toFixed(2)} by Tinseth formula</div>
            <CrossUnitsInput description="Estimated color of this beer" name="Color" value={colorSRMvalue.toFixed(2)} unit="SRM" />
            <div title="The estimated alcohol by volume for this recipe"><b>Alcohol by volume : </b>{abv.toFixed(2)} %</div>
            <div title="Calories in one liter of the beer, based on original and final gravities">
              <b>Calories: </b>{caloriesInOneL.toFixed(0)} per one L
            </div>
          </div>
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
