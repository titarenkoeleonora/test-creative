import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";

import Menu from "./Menu";

it('Render Menu component', () => {
  const tree = renderer
    .create(
      <Router>
        <Menu />
      </Router>
    );

  expect(tree).toMatchSnapshot();
});