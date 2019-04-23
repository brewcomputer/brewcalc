import React from 'react'

import {
  litersToGallons,
  kgToOunces,
  celsiusToFahrenheit,
  sgToPlato,
  srmToEbc
} from 'brewcalc'


const convertionMapper = (value, unit) => {

  switch (unit) {
    case 'L':
      return { value: (litersToGallons(value).toFixed(2)), unit: 'gal' }
    case 'kg':
      return { value: (kgToOunces(value).toFixed(2)), unit: 'oz' }
    case 'C':
      return { value: (celsiusToFahrenheit(value).toFixed(2)), unit: '°F' }
    case 'SG':
      return { value: (sgToPlato(value).toFixed(2)), unit: '°P' }
    case 'SRM':
      return { value: (srmToEbc(value).toFixed(2)), unit: 'EBC' }
    default:
      return ''
  }
}

const CrossUnitsInput = ({ name, description, value, unit }) => {
  const converted = convertionMapper(value, unit)
  return (
    (value !== '0.00' && value !== 'false') &&
    <div title={description}><b>{name} </b>{value} {unit}
      {converted !== '' ? ' (' + converted.value + ' ' + converted.unit + ')' : ''}
    </div>
  )
}

export default CrossUnitsInput
