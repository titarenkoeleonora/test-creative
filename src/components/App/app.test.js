import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

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

it('Render App', () => {
  const tree = renderer
    .create(
      <App
        animals={animals}
      />
    );

  expect(tree).toMatchSnapshot();
});