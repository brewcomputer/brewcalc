import React from 'react'
import { Panel, Col, Row } from 'react-bootstrap'

const RecipeSpecs = ({ recipe, equipment }) => {
  const { name, brewer, type, batchSize, boilSize, boilTime } = recipe
  return (
    <Panel header="Recipe Specs and Equipment">
      <Row className="show-grid">
        <Col md={6}>
          <ul>
            <li><b>Name: </b>{name}</li>
            <li><b>Brewer: </b>{brewer}</li>
            <li><b>Type: </b>{type}</li>
            <li><b>Batch Size: </b>{batchSize.toFixed(2)} L</li>
            <li><b>Boil Size: </b>{boilSize.toFixed(2)} L</li>
            <li><b>Boil Time: </b>{boilTime.toFixed(2)} min</li>
          </ul>
        </Col>
        <Col md={6}>
          {equipment === null ? (
            <ul>
              Equipment is not set
            </ul>
          ) : (
              <ul>
                <li><b>Equipment Name: </b>{equipment.name}</li>
                <li><b>Batch Size: </b>{equipment.batchSize.toFixed(2)} L</li>
                <li><b>Boil Size: </b>{equipment.boilSize.toFixed(2)} L</li>
                <li><b>Efficiency: </b>{equipment.efficiency}</li>
                <li><b>Evap Rate: </b>{equipment.evapRate.toFixed(2)}</li>
                <li><b>Cooling Loss: </b>{equipment.coolingLossPct * 100} %</li>
                {equipment.trubChillerLoss > 0 &&
                  <li>
                    <b>Trub Chiller Loss: </b>{equipment.trubChillerLoss.toFixed(2)} L
            </li>}
                {equipment.lauterDeadspace > 0 &&
                  <li>
                    <b>Lauter Deadspace: </b>{equipment.lauterDeadspace.toFixed(2)} L
            </li>}
                {equipment.topUpKettle > 0 &&
                  <li><b>TopUpKettle: </b>{equipment.topUpKettle.toFixed(2)} L</li>}
                {equipment.BIAB === true &&
                  <li><b>BIAB: </b>{equipment.BIAB.toString()}</li>}

              </ul>
            )}
        </Col>
      </Row>
    </Panel>
  )
}
export default RecipeSpecs
