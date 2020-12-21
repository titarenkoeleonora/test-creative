import React from "react";
import renderer from "react-test-renderer";
import Movement from "./Movement";

it('Render Movement component', () => {
  const tree = renderer
    .create(
      <Movement />
    );

  expect(tree).toMatchSnapshot();
});