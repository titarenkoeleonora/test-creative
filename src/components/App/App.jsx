import { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Checkboxes from "../Checkboxes/Checkboxes";
import Movement from "../Movement/Movement";
import Substring from "../Substring/Substring";
import AboutMe from "../AboutMe/AboutMe";

const App = () => {
  const menuRef = useRef(null);
  const pageMainRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu--toggle");
    pageMainRef.current.classList.toggle("page-main--menu-toggle");
  };

  return (
    <>
      <Router>
        <Header toggleMenu={toggleMenu} />
        <main className="page-main" ref={pageMainRef}>
          <Menu myref={menuRef} />
          <Route path="/" component={AboutMe} exact />
          <Route path="/movement" component={Movement} />
          <Route path="/substring" component={Substring} />
          <Route path="/checkboxes" component={Checkboxes} />
        </main>
      </Router>
    </>
  );
};

export default App;
