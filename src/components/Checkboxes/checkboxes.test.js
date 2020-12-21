import React from "react";
import renderer from "react-test-renderer";
import Checkboxes from "./Checkboxes";

const animals = [
  {
    id: "dog",
    title: "Собака",
  },
  {
    id: "cat",
    title: "Кот",
  },
  {
    id: "mouse",
    title: "Мышь",
  },
];

it('Render Checkboxes component', () => {
  const tree = renderer
    .create(
      <Checkboxes
        animals={animals}
      />
    );

  expect(tree).toMatchSnapshot();
});