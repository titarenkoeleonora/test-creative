import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import animals from "./mocks/mocks";
import App from "./components/App/App";

import "./scss/styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <App animals={animals} />
  </React.StrictMode>,
  document.getElementById("root")
);
