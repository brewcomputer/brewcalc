import React from 'react';
import { ProgressBar, Panel, Tabs, Tab } from 'react-bootstrap';

class Stats extends React.Component {
    render() {
        return (
            <Panel header="Stats">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="OG, FG, IBU, SRM, ABV">
                        <ProgressBar>
                            <ProgressBar bsStyle="info" label="OG 1.03" now={30} key={1} />
                            <ProgressBar bsStyle="warning" now={9} key={2} />
                            <ProgressBar bsStyle="danger" now={2} key={3} />
                            <ProgressBar bsStyle="warning" now={9} key={4} />
                            <ProgressBar bsStyle="info" now={50} key={5} />
                        </ProgressBar>
                    </Tab>
                    <Tab eventKey={2} title="Water Volumes">Tab with Water Volumes calculations according recipe and equipment</Tab>
                    <Tab eventKey={3} title="Other stats">and etc ...</Tab>
                </Tabs>
            </Panel>
        )
    }
}

export default Stats;