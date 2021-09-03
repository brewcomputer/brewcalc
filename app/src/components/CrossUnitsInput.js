import React from "react";
import PropTypes from "prop-types";
import { convert } from "brewcalc";

const unitLabelMap = {
  sg: "SG",
  plato: "°P",
  F: "°F",
  C: "°C"
};

const stringifyMeasurable = (measurable, precision) => {
  const unit = unitLabelMap[measurable.unit] || measurable.unit;
  const value =
    precision != null ? +measurable.value.toFixed(precision) : measurable.value;
  return `${value} ${unit}`;
};

const convertMeasurable = (measurable, unit, precision) => {
  return {
    value: convert(measurable.value, measurable.unit, unit, precision),
    unit: unit
  };
};

export const printMeasurable = (measurable, convertTo, precision = 0) => {
  if (convertTo == null) {
    return stringifyMeasurable(measurable, precision);
  }
  return stringifyMeasurable(
    convertMeasurable(measurable, convertTo, precision)
  );
};

const CrossUnitsInput = ({
  name,
  description,
  measurable,
  units = [],
  precision = 2
}) => {
  if (measurable == null || measurable.value == null) {
    return null;
  }

  const [primary, secondary] = units;

  return (
    <div title={description}>
      <b>{name} </b>
      {printMeasurable(measurable, primary, precision)}
      {secondary && ` (${printMeasurable(measurable, secondary, precision)})`}
    </div>
  );
};

CrossUnitsInput.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  measurable: PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string
  }),
  units: PropTypes.arrayOf(PropTypes.string),
  precision: PropTypes.arrayOf(PropTypes.number) || PropTypes.number
};

export default CrossUnitsInput;
