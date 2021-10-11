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

const MashStepDescription = ({ step, spargeVolume }) => {
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
    case "sparge":
      return (
        <td style={{ display: "flex" }}>
          Fly sparge with&nbsp;
          <CrossUnitsInput measurable={spargeVolume} units={["l", "gal"]} />
          &nbsp;water at&nbsp;
          <CrossUnitsInput
            measurable={step.step_temperature}
            units={["C", "F"]}
            precision={0}
          />
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

const MashSteps = ({ recipe, equipment }) => {
  const mashGrainWeight = calcMashGrainWeight(
    recipe.ingredients.fermentable_additions
  );
  const recalculatedMashSteps = recalculateMashSteps(
    recipe.mash.mash_steps,
    recipe.mash.grain_temperature,
    mashGrainWeight
  );

  const { pre_boil_size } = calcBoilVolumes(
    recipe.batch_size,
    recipe.boil,
    equipment
  );

  const { sparge_volume } = calcMashVolumes(
    pre_boil_size,
    recalculatedMashSteps,
    mashGrainWeight,
    equipment
  );

  return (
    <Card>
      <Card.Header>Mash Steps</Card.Header>
      <Table striped bordered hover>
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
              <MashStepDescription step={step} spargeVolume={sparge_volume} />
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
    </Card>
  );
};

export default MashSteps;
