import React from 'react'
import { Panel, Table } from 'react-bootstrap'
const Hops = ({ hops }) => (
    <Panel header="Hops">
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>alpha</th>
                    <th>amount (kg)</th>
                    <th>use</th>
                    <th>form</th>
                    <th>time (min)</th>
                </tr>
            </thead>
            <tbody>
                {hops.map((i, index) => (
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.alpha}</td>
                        <td>{i.amount}</td>
                        <td>{i.use}</td>
                        <td>{i.form}</td>
                        <td>{i.time}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Panel>
)

export default Hops