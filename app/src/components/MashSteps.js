import React from "react";
import { Card, Table } from "react-bootstrap";
import {
  recalculateMashSteps,
  calcBoilVolumes,
  calcMashVolumes,
  calcMashGrainWeight,
} from "brewcalc";
import CrossUnitsInput, { printMeasurable } from "./CrossUnitsInput";

//TODO: Add BIAB

const MashSteps = ({ recipe, equipment }) => {
  const mashStepDescription = (step) => {
    switch (step.type) {
      case "decoction":
        return (
          <td style={{ display: "flex" }}>
            Decoct&nbsp;
            <CrossUnitsInput measurable={step.amount} units={["l", "gal"]} />
            &nbsp;of mash and boil it
          </td>
        );
      case "temperature":
        if (step.infuseAmount > 0)
          return (
            <td style={{ display: "flex" }}>
              Add&nbsp;
              <CrossUnitsInput measurable={step.amount} units={["l", "gal"]} />
              &nbsp;of water and heat to&nbsp;
              <CrossUnitsInput
                measurable={step.step_temperature}
                units={["C", "F"]}
                precision={0}
              />
            </td>
          );
        else
          return (
            <td style={{ display: "flex" }}>
              Heat to&nbsp;
              <CrossUnitsInput
                measurable={step.step_temperature}
                units={["C", "F"]}
                precision={0}
              />
              &nbsp;over&nbsp;{printMeasurable(step.step_time)}&nbsp;min
            </td>
          );
      case "infusion":
      default:
        return (
          <td style={{ display: "flex" }}>
            Add&nbsp;
            <CrossUnitsInput measurable={step.amount} units={["l", "gal"]} />
            &nbsp;of water at&nbsp;
            <CrossUnitsInput
              measurable={step.step_temperature}
              units={["C", "F"]}
              precision={0}
            />
          </td>
        );
    }
  };

  const mashGrainWeight = calcMashGrainWeight(
    recipe.ingredients.fermentable_additions
  );
  const recalculatedMashSteps = recalculateMashSteps(
    recipe.mash.mash_steps,
    recipe.mash.grain_temperature,
    mashGrainWeight
  );

  const { sparge_volume } = calcMashVolumes(
    recipe.boil.pre_boil_size,
    recalculatedMashSteps,
    mashGrainWeight,
    equipment
  );

  return (
    <Card>
      <Card.Header>Mash Steps</Card.Header>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Step Temperature</th>
            <th>Step Time</th>
          </tr>
        </thead>
        <tbody>
          {recalculatedMashSteps.map((step, index) => (
            <tr key={index}>
              <td>{step.name}</td>
              {mashStepDescription(step)}
              <td>
                <CrossUnitsInput
                  measurable={step.step_temperature}
                  units={["C", "F"]}
                  precision={0}
                />
              </td>
              <td>{step.step_time.value} min</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Card.Body>
        <div style={{ display: "flex" }}>
          <b>Sparge:&nbsp;</b>Fly sparge with&nbsp;
          <CrossUnitsInput measurable={sparge_volume} units={["l", "gal"]} />
          &nbsp;water at&nbsp;
          <CrossUnitsInput
            measurable={recipe.mash.step_temperature}
            units={["C", "F"]}
            precision={0}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MashSteps;
