import React from "react";
import renderer from "react-test-renderer";
import Substring from "./Substring";

it('Render Substring component', () => {
  const tree = renderer
    .create(
      <Substring />
    );

  expect(tree).toMatchSnapshot();
});