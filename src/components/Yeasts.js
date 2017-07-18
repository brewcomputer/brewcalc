import React from 'react'
import { Panel, Table } from 'react-bootstrap'

const Yeasts = ({ yeasts }) => (
    <Panel header="Yeasts">
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>attenuation</th>
                    <th>form</th>
                    <th>type</th>
                    <th>cultureDate</th>
                </tr>
            </thead>
            <tbody>
                {yeasts.map((i, index) => (
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.attenuation}</td>
                        <td>{i.form}</td>
                        <td>{i.type}</td>
                        <td>{i.cultureDate}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Panel>
)
export default Yeasts