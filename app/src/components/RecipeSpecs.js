import React from 'react'
import { Panel, Col, Row } from 'react-bootstrap'

import CrossUnitsInput from './CrossUnitsInput'

const RecipeSpecs = ({ recipe, equipment }) => {
  const { name, brewer, type, batchSize, boilSize, boilTime, efficiency } = recipe
  return (
    <Panel header="Recipe Specs and Equipment">
      <Row className="show-grid">
        <Col md={6}>
          <ul>
            <CrossUnitsInput description="Name of the recipe" name="Name" value={name} />
            <CrossUnitsInput description="Name of the brewer" name="Brewer" value={brewer} />
            <CrossUnitsInput description="May be one of “Extract”, “Partial Mash” or “All Grain”" name="Type" value={type} />
            <CrossUnitsInput description="Target size of the finished batch in liters" name="Batch Size" value={batchSize.toFixed(2)} unit="L" />
            <CrossUnitsInput description="Starting size for the main boil of the wort in liters" name="Boil Size" value={boilSize.toFixed(2)} unit="L" />
            <CrossUnitsInput description="The total time to boil the wort in minutes" name="Boil Time" value={boilTime.toFixed(2)} unit="min" />
            <CrossUnitsInput description="The percent brewhouse efficiency to be used for estimating the starting gravity of the beer" name="Efficiency" value={efficiency * 100} unit="%" />
          </ul>
        </Col>
        <Col md={6}>
          {equipment === null ? (
            <ul>
              Equipment is not set
            </ul>
          ) : (
              <ul>
                <CrossUnitsInput description="Name of the equipment profile – usually a text description of the brewing setup" name="Equipment Name" value={equipment.name} unit="" />
                <CrossUnitsInput description="The target volume of the batch at the start of fermentation" name="Batch Size" value={equipment.batchSize.toFixed(2)} unit="L" />
                <CrossUnitsInput description="The pre-boil volume used in this particular instance for this equipment setup.  Note that this may be a calculated" name="Boil Size" value={equipment.boilSize.toFixed(2)} unit="L" />
                <CrossUnitsInput description="The percentage of wort lost to evaporation per hour of the boil" name="Evap Rate" value={equipment.evapRate.toFixed(2) * 100} unit="% per hour" />
                <CrossUnitsInput description="" name="Cooling Loss" value={equipment.coolingLossPct * 100} unit="%" />
                <CrossUnitsInput description="The amount of wort normally lost during transition from the boiler to the fermentation vessel" name="Trub Chiller Loss" value={equipment.trubChillerLoss.toFixed(2)} unit="L" />
                <CrossUnitsInput description="Amount lost to the lauter tun and equipment associated with the lautering process" name="Lauter Deadspace" value={equipment.lauterDeadspace.toFixed(2)} unit="L" />
                <CrossUnitsInput description="Amount normally added to the boil kettle before the boil" name="TopUpKettle" value={equipment.topUpKettle.toFixed(2)} unit="L" />
                <CrossUnitsInput description="" name="BIAB" value={equipment.BIAB.toString()} unit="" />
              </ul>
            )}
        </Col>
      </Row>
    </Panel >
  )
}
export default RecipeSpecs
