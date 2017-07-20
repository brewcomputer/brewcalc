import React from 'react'
import { Table, Panel } from 'react-bootstrap'

const Fermentables = ({ fermentables }) => (
    <Panel header="Fermentables">
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>color (SRM)</th>
                    <th>amount (kg)</th>
                    <th>potential (SG)</th>
                    <th>addAfterBoil</th>
                    <th>type</th>
                </tr>
            </thead>
            <tbody>
                {fermentables.map((i, index) => (
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.color}</td>
                        <td>{i.amount}</td>
                        <td>{i.potential}</td>
                        <td>{i.addAfterBoil.toString()}</td>
                        <td>{i.type}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Panel>
)

export default Fermentables