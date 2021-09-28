import React from "react";
import renderer from "react-test-renderer";
import CrossUnitsInput from "./CrossUnitsInput";

test("renders without crashing", () => {
  const tree = renderer
    .create(
      <CrossUnitsInput
        description="description"
        name="Boil Size"
        measurable={{ value: 20, unit: "l" }}
        units={["l", "gal"]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders without crashing on US units", () => {
  const tree = renderer
    .create(
      <CrossUnitsInput
        description="description"
        name="Boil Size"
        measurable={{ value: 5, unit: "gal" }}
        units={["l", "gal"]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
