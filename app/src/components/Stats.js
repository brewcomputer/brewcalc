import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import CrossUnitsInput, { printMeasurable } from "./CrossUnitsInput";

import {
  calcOriginalGravity,
  calcFinalGravity,
  calcBoilGravity,
  calcColor,
  calcABV,
  calcCalories,
  srmToCss,
  bitternessIbuTinseth,
  convert,
} from "brewcalc";

const Stats = ({ recipe, equipment }) => {
  const {
    batch_size,
    boil: { pre_boil_size, boil_time },
    ingredients,
    efficiency,
  } = recipe;

  const trubChillerLoss = equipment !== null ? equipment.trubChillerLoss : 0;

  const { fermentable_additions, hop_additions, culture_additions } =
    ingredients;

  const og = calcOriginalGravity(batch_size, fermentable_additions, efficiency);

  const fg = calcFinalGravity(
    batch_size,
    fermentable_additions,
    efficiency,
    culture_additions
  );

  const boilGravity = calcBoilGravity(batch_size, pre_boil_size, og);

  const ibu = bitternessIbuTinseth(hop_additions, boilGravity, batch_size);

  const color = calcColor(fermentable_additions, batch_size);

  const abv = calcABV(og, fg);
  const calories = calcCalories(og.value, fg.value);
  const caloriesInOneL = calories / (12 * convert(1, "floz", "l"));

  return (
    <Card>
      <Card.Header>Gravity, Alcohol Content and Color</Card.Header>
      <Card.Body>
        <Row className="show-grid">
          <Col md={6}>
            <div>
              <CrossUnitsInput
                description="The estimated original gravity of this recipe"
                name="Original Gravity"
                measurable={og}
                units={["sg", "plato"]}
                precision={3}
              />
              <CrossUnitsInput
                description="The estimated final gravity of this recipe"
                name="Final Gravity"
                measurable={fg}
                units={["sg", "plato"]}
                precision={3}
              />
              <div title="The bitterness of the recipe as measured in International Bitterness Units">
                <b>Bitterness (IBUs): </b>
                {printMeasurable(ibu, null, 0)} by Tinseth formula
              </div>
              <CrossUnitsInput
                description="Estimated color of this beer"
                name="Color"
                measurable={color}
                units={["SRM", "EBC"]}
              />
              <div title="The estimated alcohol by volume for this recipe">
                <b>Alcohol by volume : </b>
                {printMeasurable(abv)}
              </div>
              <div title="Calories in one liter of the beer, based on original and final gravities">
                <b>Calories: </b>
                {caloriesInOneL.toFixed(0)} per one L
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                backgroundColor: srmToCss(color.value),
                height: 150,
              }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Stats;
