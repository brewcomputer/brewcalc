import React from "react";
import { Card, Table } from "react-bootstrap";
import CrossUnitsInput, { printMeasurable } from "./CrossUnitsInput";

const Ingredients = ({ recipe }) => {
  const { fermentable_additions, hop_additions, culture_additions } =
    recipe.ingredients;
  return (
    <Card>
      <Card.Header>Ingredients</Card.Header>

      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fermentable_additions.map((i, index) => (
            <tr key={index}>
              <td>
                <CrossUnitsInput measurable={i.amount} units={["kg", "lb"]} />
              </td>
              <td>
                {i.name} ({printMeasurable(i.color, "SRM", 0)})
              </td>
              <td>{i.type}</td>
            </tr>
          ))}
          {hop_additions.map((i, index) => (
            <tr key={index}>
              <td>
                <CrossUnitsInput measurable={i.amount} units={["g", "oz"]} />
              </td>
              <td>
                {i.name} ({printMeasurable(i.alpha_acid)} Alpha, Boil time{" "}
                {printMeasurable(i.timing.time)})
              </td>
              <td>Hop</td>
            </tr>
          ))}
          {culture_additions.map((i, index) => (
            <tr key={index}>
              <td>
                <CrossUnitsInput measurable={i.amount} units={["g", "oz"]} />
              </td>
              <td>
                {i.name} (Attenuation {printMeasurable(i.attenuation, null, 2)},
                Form {i.form})
              </td>
              <td>Yeast</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Ingredients;
