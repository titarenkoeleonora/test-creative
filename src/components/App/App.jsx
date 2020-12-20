import {useState, useRef} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Checkboxes from "../Checkboxes/Checkboxes";
import Movement from "../Movement/Movement";
import Substring from "../Substring/Substring";
import AboutMe from "../AboutMe/AboutMe";

const App = () => {
  const currentViewport  = document.documentElement.clientWidth;

  const navigationRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState("0")

  const toggleMenu = () => {
    setMenuWidth(menuWidth === "0" ? "250px" : "0");
  };

  return (
    <>
      <Router>
        <Header toggleMenu={toggleMenu} />
        <main className="page-main" style={{marginLeft: menuWidth}}>
          <Menu myref={navigationRef} width={menuWidth} />
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
