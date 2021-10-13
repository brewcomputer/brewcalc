import React from "react";
import Recipe from "./Recipe";
import { recipe } from "../data/recipe";
import { equipment } from "../data/equipment";
import renderer from "react-test-renderer";

test("renders without crashing", () => {
  const tree = renderer
    .create(<Recipe recipe={recipe} equipment={equipment} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders without crashing with null equipment", () => {
  const tree = renderer
    .create(<Recipe recipe={recipe} equipment={null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
