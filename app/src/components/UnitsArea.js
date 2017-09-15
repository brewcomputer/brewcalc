import React from 'react'
import { Panel, ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const UnitsArea = ({ units, onChangeUnits }) => {
  const onClick = (payload) => {
    onChangeUnits(payload)
  }
  return (
    <Panel header="Units (unit settings for the recipe calculations)">
      <ButtonToolbar>
        <Button onClick={() => onClick('metric')}>Set to Metric Units</Button>
        <Button onClick={() => onClick('english')}>Set to English (US) Units</Button>
      </ButtonToolbar>
    </Panel>
  )
}

const mapStateToProps = ({ units }) => ({ units })

const mapDispatchToProps = dispatch => ({
  onChangeUnits: units => {
    dispatch({
      type: 'UPDATE_UNITS',
      payload: units
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UnitsArea)
