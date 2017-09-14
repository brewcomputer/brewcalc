import React from 'react'
import { connect } from 'react-redux'

import {
  litersToGallons
} from 'brewcalc'


const convertionMapper = (value, unit, units) => {

  switch (unit) {
    case 'L':
      return units !== 'metric' ? { value: (litersToGallons(value).toFixed(2)), unit: 'gal' } : { value: value, unit: unit }
    default:
      return { value: value, unit: unit }
  }
}

const CrossUnitsInput = ({ name, description, value, unit, units }) => {
  const converted = convertionMapper(value, unit, units)
  return (
    (value !== '0.00' && value !== 'false') &&
    <li title={description}><b>{name}: </b>{converted.value} {converted.unit}</li>
  )
}

const mapStateToProps = ({ units }) => ({ units })

export default connect(mapStateToProps)(CrossUnitsInput)
