import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import CrossUnitsInput from "./CrossUnitsInput";

const RecipeSpecs = ({ recipe, equipment }) => {
  const {
    name,
    author,
    type,
    batch_size,
    boil: { boil_time, pre_boil_size },
    efficiency,
  } = recipe;
  return (
    <Card>
      <Card.Header>Recipe Specs and Equipment</Card.Header>
      <Card.Body>
        <Row className="show-grid">
          <Col md={6}>
            <div>
              <div title="Name of the recipe">
                {" "}
                <b>Name</b> {name}{" "}
              </div>
              <div title="Name of the brewer">
                {" "}
                <b>Brewer</b> {author}{" "}
              </div>
              <div title="May be one of “Extract”, “Partial Mash” or “All Grain”">
                {" "}
                <b>Type</b> {type}{" "}
              </div>
              <CrossUnitsInput
                description="Target size of the finished batch in liters"
                name="Batch Size"
                measurable={batch_size}
                units={["l", "gal"]}
              />
              <CrossUnitsInput
                description="Starting size for the main boil of the wort in liters"
                name="Boil Size"
                measurable={pre_boil_size}
                units={["l", "gal"]}
              />
              <CrossUnitsInput
                description="The total time to boil the wort in minutes"
                name="Boil Time"
                measurable={boil_time}
              />
              <CrossUnitsInput
                description="The percent brewhouse efficiency to be used for estimating the starting gravity of the beer"
                name="Efficiency"
                measurable={efficiency.brewhouse}
              />
            </div>
          </Col>
          <Col md={6}>
            {equipment === null ? (
              <div>Equipment is not set</div>
            ) : (
              <div>
                <div title="Name of the equipment profile – usually a text description of the brewing setup">
                  {" "}
                  <b>Equipment Name</b> {equipment.name}{" "}
                </div>
                <CrossUnitsInput
                  description="The target volume of the batch at the start of fermentation"
                  name="Batch Size"
                  measurable={equipment.batchSize}
                  units={["l", "gal"]}
                />
                <CrossUnitsInput
                  description="The pre-boil volume used in this particular instance for this equipment setup.  Note that this may be a calculated"
                  name="Boil Size"
                  measurable={equipment.boilSize}
                  units={["l", "gal"]}
                />
                <CrossUnitsInput
                  description="The percentage of wort lost to evaporation per hour of the boil"
                  name="Evap Rate"
                  measurable={equipment.evapRate}
                />
                <CrossUnitsInput
                  description=""
                  name="Cooling Loss"
                  measurable={equipment.coolingLossPct * 100}
                />
                <CrossUnitsInput
                  description="The amount of wort normally lost during transition from the boiler to the fermentation vessel"
                  name="Trub Chiller Loss"
                  measurable={equipment.trubChillerLoss}
                  units={["l", "gal"]}
                />
                <CrossUnitsInput
                  description="Amount lost to the lauter tun and equipment associated with the lautering process"
                  name="Lauter Deadspace"
                  measurable={equipment.lauterDeadspace.toFixed(2)}
                  units={["l", "gal"]}
                />
                <CrossUnitsInput
                  description="Amount normally added to the boil kettle before the boil"
                  name="TopUpKettle"
                  measurable={equipment.topUpKettle.toFixed(2)}
                  units={["l", "gal"]}
                />
                <CrossUnitsInput
                  description=""
                  name="BIAB"
                  measurable={equipment.BIAB.toString()}
                />
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default RecipeSpecs;
