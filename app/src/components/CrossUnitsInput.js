import React from "react";

import { convert } from "brewcalc";

const convertionMapper = (value, unit) => {
  switch (unit) {
    case "L":
      return { value: convert(value, "l", "gel", 2), unit: "gal" };
    case "kg":
      return { value: convert(value, "kg", "oz", 2), unit: "oz" };
    case "C":
      return { value: convert(value, "C", "F", 2), unit: "°F" };
    case "SG":
      return { value: convert(value, "sg", "plato", 2), unit: "°P" };
    case "SRM":
      return { value: convert(value, "SRM", "EBC"), unit: "EBC" };
    default:
      return "";
  }
};

const CrossUnitsInput = ({ name, description, value, unit }) => {
  const converted = convertionMapper(value, unit);
  return (
    value !== "0.00" &&
    value !== "false" && (
      <div title={description}>
        <b>{name} </b>
        {value} {unit}
        {converted !== ""
          ? " (" + converted.value + " " + converted.unit + ")"
          : ""}
      </div>
    )
  );
};

export default CrossUnitsInput;
