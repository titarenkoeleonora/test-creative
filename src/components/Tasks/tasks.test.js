import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import Tasks from "./Tasks";


it('Render Tasks component', () => {
  const tree = renderer
    .create(
      <Router>
        <Tasks />
      </Router>
    );

  expect(tree).toMatchSnapshot();
});