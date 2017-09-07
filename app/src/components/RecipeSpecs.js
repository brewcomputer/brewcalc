import React from 'react'
import { Panel, Col, Row } from 'react-bootstrap'

const RecipeSpecs = ({ recipe, equipment }) => {
  const { name, brewer, type, batchSize, boilSize, boilTime, efficiency } = recipe
  return (
    <Panel header="Recipe Specs and Equipment">
      <Row className="show-grid">
        <Col md={6}>
          <ul>
            <li title="Name of the recipe"><b>Name: </b>{name}</li>
            <li title="Name of the brewer"><b>Brewer: </b>{brewer}</li>
            <li title="May be one of “Extract”, “Partial Mash” or “All Grain”"><b>Type: </b>{type}</li>
            <li title="Target size of the finished batch in liters"><b>Batch Size: </b>{batchSize.toFixed(2)} L</li>
            <li title="Starting size for the main boil of the wort in liters"><b>Boil Size: </b>{boilSize.toFixed(2)} L</li>
            <li title="The total time to boil the wort in minutes"><b>Boil Time: </b>{boilTime.toFixed(2)} min</li>
            <li title="The percent brewhouse efficiency to be used for estimating the starting gravity of the beer"><b>Efficiency: </b>{efficiency * 100} %</li>
          </ul>
        </Col>
        <Col md={6}>
          {equipment === null ? (
            <ul>
              Equipment is not set
            </ul>
          ) : (
              <ul>
                <li title="Name of the equipment profile – usually a text description of the brewing setup"><b>Equipment Name: </b>{equipment.name}</li>
                <li title="The target volume of the batch at the start of fermentation"><b>Batch Size: </b>{equipment.batchSize.toFixed(2)} L</li>
                <li title="The pre-boil volume used in this particular instance for this equipment setup.  Note that this may be a calculated"><b>Boil Size: </b>{equipment.boilSize.toFixed(2)} L</li>
                <li title="The percentage of wort lost to evaporation per hour of the boil"><b>Evap Rate: </b>{equipment.evapRate.toFixed(2)} % per hour</li>
                <li title=""><b>Cooling Loss: </b>{equipment.coolingLossPct * 100} %</li>
                {equipment.trubChillerLoss > 0 &&
                  <li title="The amount of wort normally lost during transition from the boiler to the fermentation vessel">
                    <b>Trub Chiller Loss: </b>{equipment.trubChillerLoss.toFixed(2)} L
            </li>}
                {equipment.lauterDeadspace > 0 &&
                  <li title="Amount lost to the lauter tun and equipment associated with the lautering process">
                    <b>Lauter Deadspace: </b>{equipment.lauterDeadspace.toFixed(2)} L
            </li>}
                {equipment.topUpKettle > 0 &&
                  <li title="Amount normally added to the boil kettle before the boil"><b>TopUpKettle: </b>{equipment.topUpKettle.toFixed(2)} L</li>}
                {equipment.BIAB === true &&
                  <li title=""><b>BIAB: </b>{equipment.BIAB.toString()}</li>}

              </ul>
            )}
        </Col>
      </Row>
    </Panel>
  )
}
export default RecipeSpecs
