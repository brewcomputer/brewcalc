import React from 'react'
import { connect } from 'react-redux'

const CrossUnitsInput = ({ name, description, value, unit, units }) => {
  return (
    (value !== '0.00' && value !== 'false') &&
    <li title={description}><b>{name}: </b>{value}{unit}</li>
  )
}

const mapStateToProps = ({ units }) => ({ units })

export default connect(mapStateToProps)(CrossUnitsInput)
