import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

it('Render Header component', () => {
  const tree = renderer
    .create(
      <Header />
    );

  expect(tree).toMatchSnapshot();
});