import React from 'react'
import { Panel, Table } from 'react-bootstrap'
const Ingredients = ({ recipe }) => {
  const { fermentables, hops, yeasts } = recipe
  return (
    <Panel header="Ingredients">
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Amt (kg)</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fermentables.map((i, index) => (
            <tr key={index}>
              <td>{i.amount.toFixed(2)}</td>
              <td>{i.name} ({i.color.toFixed(0)} SRM)</td>
              <td>{i.type}</td>
            </tr>
          ))}
          {hops.map((i, index) => (
            <tr key={index}>
              <td>{i.amount.toFixed(2)}</td>
              <td>{i.name} ({i.alpha} Alpha, Boil time {i.time} min)</td>
              <td>Hop</td>
            </tr>
          ))}
          {yeasts.map((i, index) => (
            <tr key={index}>
              <td>{i.amount.toFixed(2)}</td>
              <td>{i.name} (Attenuation {i.attenuation},  Form {i.form})</td>
              <td>Yeast</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  )
}

export default Ingredients
