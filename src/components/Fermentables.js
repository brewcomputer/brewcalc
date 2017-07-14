import React from 'react';
import { Table, Panel } from 'react-bootstrap';

const Fermentables = () => (
    <Panel header="Fermentables">
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>color</th>
                    <th>amount</th>
                    <th>potential</th>
                    <th>addAfterBoil</th>
                    <th>type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pale Malt (2 Row) UK</td>
                    <td>4.9250000</td>
                    <td>4.4969891</td>
                    <td>1.0299920</td>
                    <td>false</td>
                    <td>Grain</td>
                </tr>
                <tr>
                    <td>Munich Malt - 20L</td>
                    <td>39.4000000</td>
                    <td>0.5188834</td>
                    <td>1.0345000</td>
                    <td>false</td>
                    <td>Grain</td>
                </tr>
            </tbody>
        </Table>
    </Panel>
)

export default Fermentables;